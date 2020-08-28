import { fetchFromPost, fetchFromPut } from "/js/site/commons/HttpUtils.js";
import { paymentModal, renderPaypalButtons } from "/js/site/components/paymentModal/PaymentModal.js";
import { DevspotBase, Role } from "/js/site/commons/DevspotBase.js";
import { constants } from "/js/site/siteConstants.js";
class practiceTest extends DevspotBase {
    constants;
    exam;
    questionBank;
    numberOfQuestions = 10;
    componentRoot = (document.body.querySelector('practice-test'));
    userRole;

    constructor() {
        super();
        // this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        this.constants = (await import('/js/site/siteConstants.js')).constants;
        let body = {"examId":this.getAttribute("examId"),"examProvider":this.getAttribute("examProvider")};
        this.exam = await fetchFromPost(this.constants.examEndpoint, body);
        this.questionBank = this.exam.questions;
        this.userRole = await this.getAssignedUserRole(this.exam);
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="practiceTest-styles">
                <div class="section-title">
                ${paymentModal}
                    <span class="caption d-block small">Exam</span>
                    <h3>${this.exam.examId}</h3>
                    <img src="/images/logo/avail/${this.exam.badgeFile}" class="cert-cred">
                </div>
                <div id="welcomeMessage" style=" min-height: 400px;">
                    <p style="text-align: center;"><strong>${this.exam.examAcronym} (${this.exam.examId})</strong></p>
                    <p style="text-align: center;">Welcome to the ${this.exam.examProvider} ${this.exam.examName} Exam<span>&nbsp;readiness quiz</span>&nbsp;</p>
                    <p>Select the number of questions that will be randomly selected from our curated database of ${this.exam.totalNumberOfQuestions} questions, score more than 70% and you will be ready to sit for your exam.</p>
                    <p><strong>Note:</strong> Please register to keep track of your completion progress in the 'My Tracks' option.</p> 
                    <br>
                    <label for="nameInput" style="float: left;">Your name: &nbsp;</label><input type="text" id="nameInput" style="float: left;" >
                    <label for="examLength" style="float: left;">&nbsp; Exam Length: &nbsp;</label>
                    <select name="examLength" id="examLength" style="float: left;">
                      <option value="5">5 Questions</option>
                      <option value="10">10 Questions</option>
                      ${this.userData ? '<option value="30">30 Questions</option>' : '<option value="1" disabled>(Sign In) 30 Questions</option>'} 
                      ${this.userData ? '<option value="65">65 Questions</option>' : '<option value="1" disabled>(Sign In) 65 Questions</option>'} 
                    </select>
                    <button type="button" class="btn stdButton" id="start" style="float: right;" ><i class="fa fa-flag"> Start Assessment</i></button>
                </div>
             </template>`
        this.componentRoot.append(div);
        const template = this.componentRoot.querySelector(`#practiceTest-styles`);
        const node = document.importNode(template.content, true);
        this.componentRoot.innerHTML='';
        this.componentRoot.appendChild(node);
        this.componentRoot.querySelector(`#start`).onclick = async () => {
            //We import paypal AFTER inserting in the dom the paypal form
            (await import(`https://www.paypal.com/sdk/js?client-id=${constants.paypalClientId}&currency=USD`));
            let onApproveRerenderCallback = (details) => {
                document.querySelector('#btnContribute').style.display = 'none';
                document.querySelector('#btnSaveToMyTrack').style.display = 'inline-block';
                document.querySelector('#btnClosePopup').click();
                //Save to rest service from table userExam details
            };
            if (this.userRole !== Role.VISITOR) {
                renderPaypalButtons(onApproveRerenderCallback, this.userData.username, this.exam.examId);
            }
            this.componentRoot.querySelector(`#start`).disabled= true;
            this.createTest();
        };
    };

    async createTest() {
        this.numberOfQuestions = +this.componentRoot.querySelector('#examLength').value;
        let body = {
            "examId": this.exam.examId,
            "examProvider": this.exam.examProvider,
            "numberOfQuestions": this.numberOfQuestions,
            "totalNumberOfQuestions": this.exam.totalNumberOfQuestions,
            "userId": this.userData?.username,
            "userRole": this.userRole
        };
        let examQuestionInfo = (await fetchFromPost(this.constants.questionEndpoint, body));
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="master-section">
                <div id="passMessage" style="display:none;" class="col-lg-12">
                    <h4 id="passHeader" class="col-lg-12" style="min-height: 20px;">Message</h4>
                    <div class="col-lg-4 text-align-center">
                    <button class="btn stdButton" type="button" id="btnRetake" onclick="window.location.reload();" ><i class="fa fa-repeat"> Try again!</i> </button>
                    </div>
                    <div class="col-lg-4 text-align-center padding-sides-0">
                    ${this.getSaveToMyTrackMenu(examQuestionInfo.myTrackQuestionCount + examQuestionInfo.examQuestionCount)}
                    </div>
                    <div class="col-lg-4 text-align-center">
                    </div>
                </div>
                <div id="scoreSection" style="display:none;" class="col-lg-12">
                    <div class="col-lg-12" style="min-height: 25px; border-bottom: 1px solid black;">
                        <label style="float: left;">Time remaining: &nbsp;</label>
                        <span id="time" style="float: left;">00:00</span>
                        <label style="float: right;">/&nbsp;${this.numberOfQuestions}</label>
                        <label id="currentSubmissions" style="float: right;color: dodgerblue; margin: 0px 0.5em;">0</label>
                        <label style="float: right;color: dodgerblue;">&nbsp;/</label>
                        <label name="score" id="currentScore" style="float: right; color: green">0</label>
                        <label style="float: right;">Score: &nbsp;</label>
                    </div>
                </div>
             </template>`
        this.componentRoot.append(div);
        const template = this.componentRoot.querySelector(`#master-section`);
        const node = document.importNode(template.content, true);
        this.componentRoot.removeChild(div);
        this.componentRoot.appendChild(node);

        const examDuration = this.exam.timePerQuestion * this.numberOfQuestions;
        const display = this.componentRoot.querySelector('#time');
        startTimer(examDuration, display);
        let i = 1;


        examQuestionInfo.questions.forEach(question => {
            let questionOptions = '';
            if (question.questionAnswer && question.questionAnswer.length === 1) {
                question.questionOptions.forEach(option => {
                    questionOptions += ('<span style="display: inline-flex;"><input id="option' + i + option.optionId + '" name="answer' + i + '" type="radio" style="float: left;"><label id="label' + i + option.optionId + '" for="option' + i + option.optionId + '" style="padding-left: 5px;float: left;font-weight: 100;">' + option.optionId + '. ' + option.optionText + '</label></span><br>')
                });
            } else {
                question.questionOptions.forEach(option => {
                    questionOptions += ('<span style="display: inline-flex;"><input id="option' + i + option.optionId + '" name="answer' + i + '" type="checkbox" style="float: left;"><label id="label' + i + option.optionId + '" for="option' + i + option.optionId + '" style="padding-left: 5px;float: left;font-weight: 100;">' + option.optionId + '. ' + option.optionText + '</label></span> <br>')
                });
            }
            const div = document.createElement('div');
            div.id = "tmpDiv";
            div.innerHTML =
                `<template id="practiceTest-template${i}">
                <div class="row" id="questionContainer${i}" style = "display:none">
                    <div class="col-lg-12" style="min-height: 400px;">
                        <h5 class="mb-3" style="margin-top:5px;"><strong id="questionDescription">300. Question sample - A Solutions Architect AWSCSAA SAA-C02 is designing an application that will encrypt all data in an Amazon Redshift cluster.<br>Which action will encrypt the data at rest?</strong></h5>
                        <div style="border-bottom: 1px solid black;"></div>
                        <br>
                            ${questionOptions}
                        <div id="divQuestionExplanation${i}"></div>
                    </div>
                    <div class="col-lg-12">
                        <button id="prev${i}" class="btn stdButton" type="btn button" value="<" style="float: left;"><i class="fa fa-arrow-left"></i></button>
                        <button id="next${i}" class="btn stdButton" type="btn button" value=">" style="float: left;"><i class="fa fa-arrow-right"></i></button>
                        <button id="showAnswer${i}" class="btn stdButton" type="btn button" style="float: right;" ><i class="fa fa-check-square-o"> Check Answer</i></button> 
                    </div>
                </div>
            </template>`;
            this.componentRoot.append(div);
            const template = this.componentRoot.querySelector(`#practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.querySelector('#questionDescription').innerHTML = `${i}. ${question.questionText}
                                            <p style="display:none">${question.questionId}</p>
                                            <label class="userAnswer" id="u${question.questionSkId}" style="display:none"></label>`;
            this.componentRoot.removeChild(div);
            this.componentRoot.appendChild(node);
            let createValidateButton = function (shadowRoot, currentI, question, numberOfQuestions) {
                return {
                    apply: function () {
                        makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions);
                    }
                }
            }
            let a = createValidateButton(this.componentRoot, i, question, this.numberOfQuestions);
            a.apply();
            i++;
        });
        if (this.componentRoot.querySelector(`#btnSaveToMyTrack`)) {
            this.componentRoot.querySelector(`#btnSaveToMyTrack`).onclick = async () => {
                const userAnswers = this.componentRoot.querySelectorAll(`label[class=userAnswer`);
                const myTrackItems = [];
                userAnswers.forEach(answer => {
                    myTrackItems.push(
                        {
                            userId: this.userData.username,
                            examId: this.exam.examId,
                            questionSkId: +answer.id.substr(1),
                            userQuestionAnswer: answer.innerHTML,
                            createdDT: Date.now()
                        }
                    )
                });
                console.log(myTrackItems);
                this.componentRoot.querySelector(`#btnSaveToMyTrack`).disabled = true;
                const result = await fetchFromPut(this.constants.myTrackEndpoint, myTrackItems);
                this.componentRoot.querySelector(`#btnSaveToMyTrack`).style.display = 'none';
                this.componentRoot.querySelector('#btnShowMyTrack').style.display = 'inline-block';
                // console.log(result);

            };
        }
        this.enableStart();
    }

    enableStart() {
        this.componentRoot.querySelector(`#welcomeMessage`).style.display = "none";
        this.componentRoot.querySelector(`#questionContainer1`).style.display = "inline";
        this.componentRoot.querySelector(`#scoreSection`).style.display = "inline";
        this.componentRoot.querySelector(`#prev1`).disabled = true;
    }

    getSaveToMyTrackMenu(consumedQuota){
        let strToReturn = `<label id="consumedQuota" style="display: none;">${consumedQuota}</label>`;
        strToReturn += `<i id="cogLoading" class="fa fa-cog fa-spin fa-2x fa-fw" style="display: none"></i>`;
        switch (this.userRole) {
            case (Role.CONTRIBUTOR):
                strToReturn += '<button class="btn stdButton basicTooltip" type="button" id="btnSaveToMyTrack" ><i class="fa fa-save"> Save results to "My Track"</i></button>';
                strToReturn += `<button class="btn stdButton basicTooltip" type="button" id="btnShowMyTrack" style="display: none" onclick="window.location.href='/mytrack/${this.exam.examId}.html'"><i class="fa fa-map"> Go to "My Track"</i></button>`;
                break;
            case (Role.USER):
                if ( consumedQuota > 30 ) {
                    strToReturn += '<button class="btn stdButton basicTooltip" type="button" id="btnSaveToMyTrack" style="display: none"><i class="fa fa-save"> Save results to "My Track"</i></button>';
                    strToReturn += '<button id="btnContribute" type="button" class="btn stdButton basicTooltip white-space-normal" data-toggle="modal" data-target="#myModal"><i class="fa fa-credit-card-alt"> Share us, or get Contributor Access &nbsp; to save your results</i><span class="col-sm-1 basicTooltipText">You have used "My Track" 30 questions free quota, share this page using the share buttons below&#128317; to save up to 65 questions or get contributor access to unlock all the features!<br></span></button>';
                } else {
                    strToReturn += '<button class="btn stdButton basicTooltip" type="button" id="btnSaveToMyTrack" ><i class="fa fa-save"> Save results to "My Track"</i></button>';
                }
                strToReturn += `<button class="btn stdButton basicTooltip" type="button" id="btnShowMyTrack" style="display: none" onclick="window.location.href='/mytrack/${this.exam.examId}.html'"><i class="fa fa-map"> Go to "My Track"</i></button>`;
                break;
            case (Role.VISITOR):
                strToReturn = '<button class="btn stdButton basicTooltip" type="button" id="btnSaveToMyTrack"  disabled><i class="fa fa-save"> Save results to "My Track"</i><span class="col-sm-1 basicTooltipText">Sign In to save up to 30 questions in "My Track"<br></span></button>';
                break;
        }
        return strToReturn;
    }
}

customElements.define('practice-test', practiceTest);


function makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions) {

    shadowRoot.querySelector(`#next${currentI}`).onclick = () => {
        shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
        shadowRoot.querySelector(`#questionContainer${currentI + 1}`).style.display = "inline";
        shadowRoot.querySelector(`#prev${currentI + 1}`).disabled = false;
        if (currentI + 1 === numberOfQuestions) {
            shadowRoot.querySelector(`#next${currentI + 1}`).disabled = true;
        }
    }

    shadowRoot.querySelector(`#prev${currentI}`).onclick = () => {
        shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
        shadowRoot.querySelector(`#questionContainer${currentI - 1}`).style.display = "inline";
        shadowRoot.querySelector(`#next${currentI - 1}`).disabled = false;
        if (currentI - 1 === 1) {
            shadowRoot.querySelector(`#prev${currentI - 1}`).disabled = true;
        }
    }

    shadowRoot.querySelector(`#showAnswer${currentI}`).onclick = () => {
        var currentScore = shadowRoot.querySelector(`label[id=currentScore]`);
        var currentSubmissions = shadowRoot.querySelector(`label[id=currentSubmissions]`);
        currentSubmissions.innerHTML = parseInt(currentSubmissions.innerHTML) + 1;
        if (question.questionAnswerExplanation) {
            shadowRoot.querySelector(`#divQuestionExplanation${currentI}`).innerHTML =
                `<div class="col-lg-12" style="margin-top:15px;">
                        <div style="border-bottom: 1px solid black;"></div>
                        <h5 class="mb-3" style="margin-top:5px;"><strong>Explanation: </strong></h5>
                        <h5 class="mb-3">${question.questionAnswerExplanation}</h5>
                        <div style="border-bottom: 1px solid black;"></div></div>`;
        }
        if (question.questionAnswer && question.questionAnswer.length === 1) {
            const selectedAns = shadowRoot.querySelector(`input[name=answer${currentI}]:checked`);
            shadowRoot.querySelector(`#label${currentI + question.questionAnswer}`).innerHTML += '&#9989;';
            if (!shadowRoot.querySelector(`#option${currentI + question.questionAnswer}`).checked) {
                if (selectedAns) {
                    shadowRoot.querySelector('#label'+selectedAns.id.replace('option','')).innerHTML += '&#10060;';
                }
            } else {
                currentScore.innerHTML = parseInt(currentScore.innerHTML) + 1;
            }
            shadowRoot.querySelector(`#u${question.questionSkId}`).innerHTML += (selectedAns?.id?.substr(-1)) ? selectedAns?.id?.substr(-1) : '';
        } else {
            var isCorrect = true;
            var answers = question.questionAnswer.split('');
            const answersSelected = shadowRoot.querySelectorAll(`input[name=answer${currentI}]:checked`);
            if (answersSelected.length !== answers.length) {
                isCorrect = false
            }
            answersSelected.forEach(selectedAns => {
                shadowRoot.querySelector(`#u${question.questionSkId}`).innerHTML += selectedAns.id.substr(-1);
                    if (!answers.includes(selectedAns.id.substr(-1))) {
                        shadowRoot.querySelector('#label' + selectedAns.id.replace('option','')).innerHTML += '&#10060;';
                        isCorrect = false;
                    }
                }
            );
            answers.forEach(answer => {
                const elementLabelSelected = shadowRoot.querySelector(`#label${currentI + answer}`);
                elementLabelSelected.innerHTML += '&#9989;';
            });
            if (isCorrect) {
                currentScore.innerHTML = parseInt(currentScore.innerHTML) + 1;
            }
        }
        shadowRoot.querySelectorAll(`input[name=answer${currentI}]`).forEach(elem => elem.disabled = true);


        if (parseInt(currentSubmissions.innerHTML) >= numberOfQuestions) {
            shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
            shadowRoot.querySelector(`#scoreSection`).style.display = "none";
            const score = parseInt(currentScore.innerHTML);
            shadowRoot.querySelector(`#passMessage`).style.display = "inline-block";
            shadowRoot.querySelector(`#welcomeMessage`).style.display = "none";
            if (score >= (numberOfQuestions * 0.7)) {

                shadowRoot.querySelector(`#passHeader`).innerHTML = `Congrats ${shadowRoot.querySelector('#nameInput').value} you passed, Good luck on your exam! Score: ${score}/${numberOfQuestions}`;
            } else {
                shadowRoot.querySelector(`#passHeader`).innerHTML = `Oh no! ${shadowRoot.querySelector('#nameInput').value} you failed, click Retake test or reload this page to try again. Score: ${score}/${numberOfQuestions}`;
            }
        }
        shadowRoot.querySelector(`#showAnswer${currentI}`).disabled = true;
    }
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

function hideButton(){

}