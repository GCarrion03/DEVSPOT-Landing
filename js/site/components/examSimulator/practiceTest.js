import { DevspotBase } from '/js/site/commons/DevspotBase.js';
import { fetchFromPost, fetchFromPut } from "/js/site/commons/HttpUtils.js";
class practiceTest extends DevspotBase {
    constants;
    exam;
    questionBank;
    numberOfQuestions = 10;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        this.constants = (await import('/js/site/siteConstants.js')).constants;

        let body = {"examId":this.getAttribute("examId"),"examProvider":this.getAttribute("examProvider")};
        this.exam = await fetchFromPost(this.constants.examEndpoint, body);
        this.questionBank = this.exam.questions;
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="practiceTest-styles">
                <link href="/layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="/css/bootstrap.css" rel="stylesheet">
                <link href="/css/style.css" rel="stylesheet" type="text/css">
                <link rel="stylesheet" type="text/css" href="/css/roboto_light/stylesheet.css">
                <div class="section-title">
                    <span class="caption d-block small">Exam</span>
                    <h3>${this.exam.examId}</h3>
                    <img src="/images/logo/avail/${this.exam.badgeFile}" class="cert-cred">
                </div>
                <div id="welcomeMessage" style=" min-height: 400px;">
                    <p style="text-align: center;"><strong>${this.exam.examAcronym} (${this.exam.examId})</strong></p>
                    <p style="text-align: center;">Welcome to the ${this.exam.examProvider} ${this.exam.examName} Exam<span>&nbsp;readiness quiz</span>&nbsp;</p>
                    <p>Select the number of questions that will be randomly selected from our curated database of ${this.exam.totalNumberOfQuestions} questions, score more than 70% and you will be ready to sit for your exam</p> 
                    <br>
                    <label for="nameInput" style="float: left;">Your name: &nbsp;</label><input type="text" id="nameInput" style="float: left;" >
                    <label for="examLength" style="float: left;">&nbsp; Exam Length: &nbsp;</label>
                    <select name="examLength" id="examLength" style="float: left;">
                      <option value="10">10 Questions</option>
                      ${this.userData.username ? '<option value="30">30 Questions</option>' : '<option value="1" disabled>(Sign In) 30 Questions</option>'} 
                      ${this.userData.username ? '<option value="65">65 Questions</option>' : '<option value="1" disabled>(Sign In) 65 Questions</option>'} 
                    </select>
                    <button type="button" class="stdButton" id="start" style="float: right;" ><i class="fa fa-flag"> Start Assessment</i></button>
                </div>
             </template>`
        this.shadowRoot.append(div);
        const template = this.shadowRoot.getElementById(`practiceTest-styles`);
        const node = document.importNode(template.content, true);
        this.shadowRoot.removeChild(div);
        this.shadowRoot.appendChild(node);
        this.shadowRoot.getElementById(`start`).onclick = () => {
            this.shadowRoot.getElementById(`start`).disabled= true;
            this.createTest();
        };
    };

    async createTest() {
        this.numberOfQuestions = +this.shadowRoot.getElementById('examLength').value;
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="master-section">
                <div id="passMessage" style="display:none;" class="col-lg-12">
                    <h4 id="passHeader" style="min-height: 20px;">Pass</h4>
                    <button class="stdButton" type="button" id="btnSaveToMyTrack"  style="float: right;"><i class="fa fa-save"> Save results to My Track</i> </button>
                    <button class="stdButton" type="button" id="btnRetake"  style="float: right;" onclick="location = location;" ><i class="fa fa-repeat"> Do it again!</i> </button>
                    <h4 id="passHeader">Share your achievement:</h4>
                    <!--div class="shareon">
                        <a class="facebook" data-title="&#127882;&#127881;I passed my ${this.exam.examProvider} ${this.exam.examName} (${this.exam.examId}) Readiness Exam!&#127881;&#127882; Give it a try here: "></a>
                        <a class="linkedin" data-title="&#127882;&#127881;I passed my ${this.exam.examProvider} ${this.exam.examName} (${this.exam.examId}) Readiness Exam!&#127881;&#127882; Give it a try here: "></a>
                        <a class="reddit" data-title="&#127882;&#127881;I passed my ${this.exam.examProvider} ${this.exam.examName} (${this.exam.examId}) Readiness Exam!&#127881;&#127882; Give it a try here: "></a>
                        <a class="twitter" data-title="&#127882;&#127881;I passed my ${this.exam.examProvider} ${this.exam.examName} (${this.exam.examId}) Readiness Exam!&#127881;&#127882; Give it a try here: "></a>
                        <a class="whatsapp" data-title="&#127882;&#127881;I passed my ${this.exam.examProvider} ${this.exam.examName} (${this.exam.examId}) Readiness Exam!&#127881;&#127882; Give it a try here: "></a>
                    </div-->
                </div>
<!--                <div id="failMessage" style = "display:none;" class="col-lg-12">-->
<!--                    <h4 id="failHeader" style="min-height: 50px;">Fail</h4> -->
<!--                    <button class="stdButton" type="button" id="btnSaveToMyTrack"  style="float: right;"><i class="fa fa-save"> Save results to My Track</i> </button>-->
<!--                    <button class="stdButton" type="button" id="btnRetake"  style="float: right;" onclick="location = location;" ><i class="fa fa-repeat"> Retake test</i> </button>-->
<!--                </div>-->
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
        this.shadowRoot.append(div);
        const template = this.shadowRoot.getElementById(`master-section`);
        const node = document.importNode(template.content, true);
        this.shadowRoot.removeChild(div);
        this.shadowRoot.appendChild(node);

        const examDuration = this.exam.timePerQuestion * this.numberOfQuestions;
        const display = this.shadowRoot.getElementById('time');
        startTimer(examDuration, display);
        let i = 1;

        let body = {"examId":this.exam.examId,"examProvider":this.exam.examProvider,"numberOfQuestions":this.numberOfQuestions,"totalNumberOfQuestions":this.exam.totalNumberOfQuestions};
        let questions = (await fetchFromPost(this.constants.questionEndpoint, body)).questions;


        questions.forEach(question => {
            let questionOptions = '';
            if (question.questionAnswer && question.questionAnswer.length === 1) {
                question.questionOptions.forEach(option => {
                    questionOptions += ('<span style="display: inline-flex;"><input id="' + i + option.optionId + '" name="answer' + i + '" type="radio" style="float: left;"><label id="' + i + option.optionId + 'label" for="' + i + option.optionId + '" style="padding-left: 5px;float: left;font-weight: 100;">' + option.optionId + '. ' + option.optionText + '</label></span><br>')
                });
            } else {
                question.questionOptions.forEach(option => {
                    questionOptions += ('<span style="display: inline-flex;"><input id="' + i + option.optionId + '" name="answer' + i + '" type="checkbox" style="float: left;"><label id="' + i + option.optionId + 'label" for="' + i + option.optionId + '" style="padding-left: 5px;float: left;font-weight: 100;">' + option.optionId + '. ' + option.optionText + '</label></span> <br>')
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
                        <div id="${i}divQuestionExplanation"></div>
                    </div>
                    <div class="col-lg-12">
                        <button id="prev${i}" class="stdButton" type="button" value="<" style="float: left;"><i class="fa fa-arrow-left"></i></button>
                        <button id="next${i}" class="stdButton" type="button" value=">" style="float: left;"><i class="fa fa-arrow-right"></i></button>
                        <button id="${i}showAnswer" class="stdButton" type="button" style="float: right;" ><i class="fa fa-check-square-o"> Check Answer</i></button> 
                    </div>
                </div>
                <link href="https://cdn.jsdelivr.net/npm/shareon@1.2.0/dist/shareon.min.css" rel="stylesheet">
                <script src="https://cdn.jsdelivr.net/npm/shareon@1.2.0/dist/shareon.min.js" type="text/javascript"></script>
            </template>`;
            this.shadowRoot.append(div);
            const template = this.shadowRoot.getElementById(`practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.getElementById('questionDescription').innerHTML = `${i}. ${question.questionText}
                                            <p style="display:none">${question.questionId}</p>
                                            <label class="userAnswer" id="u${question.questionSkId}" style="display:none"></label>`;
            this.shadowRoot.removeChild(div);
            this.shadowRoot.appendChild(node);
            let createValidateButton = function (shadowRoot, currentI, question, numberOfQuestions) {
                return {
                    apply: function () {
                        makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions);
                    }
                }
            }
            let a = createValidateButton(this.shadowRoot, i, question, this.numberOfQuestions);
            a.apply();
            i++;
        });
        this.shadowRoot.getElementById(`btnSaveToMyTrack`).onclick = async () => {
            const userAnswers = this.shadowRoot.querySelectorAll(`label[class=userAnswer`);
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
            this.shadowRoot.getElementById(`btnSaveToMyTrack`).disabled = true;
            const result = await fetchFromPut(this.constants.myTrackEndpoint, myTrackItems);
            console.log(result);

        };
        this.enableStart();
    }

    enableStart() {
        this.shadowRoot.getElementById(`welcomeMessage`).style.display = "none";
        this.shadowRoot.getElementById(`questionContainer1`).style.display = "inline";
        this.shadowRoot.getElementById(`scoreSection`).style.display = "inline";
        this.shadowRoot.getElementById(`prev1`).disabled = true;
    }
}

customElements.define('practice-test', practiceTest);


function makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions) {

    shadowRoot.getElementById(`next${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI + 1}`).style.display = "inline";
        shadowRoot.getElementById(`prev${currentI + 1}`).disabled = false;
        if (currentI + 1 === numberOfQuestions) {
            shadowRoot.getElementById(`next${currentI + 1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`prev${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI - 1}`).style.display = "inline";
        shadowRoot.getElementById(`next${currentI - 1}`).disabled = false;
        if (currentI - 1 === 1) {
            shadowRoot.getElementById(`prev${currentI - 1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`${currentI}showAnswer`).onclick = () => {
        var currentScore = shadowRoot.querySelector(`label[id=currentScore]`);
        var currentSubmissions = shadowRoot.querySelector(`label[id=currentSubmissions]`);
        currentSubmissions.innerHTML = parseInt(currentSubmissions.innerHTML) + 1;
        if (question.questionAnswerExplanation) {
            shadowRoot.getElementById(`${currentI}divQuestionExplanation`).innerHTML =
                `<div class="col-lg-12" style="margin-top:15px;">
                        <div style="border-bottom: 1px solid black;"></div>
                        <h5 class="mb-3" style="margin-top:5px;"><strong>Explanation: </strong></h5>
                        <h5 class="mb-3">${question.questionAnswerExplanation}</h5>
                        <div style="border-bottom: 1px solid black;"></div></div>`;
        }
        if (question.questionAnswer && question.questionAnswer.length === 1) {
            shadowRoot.getElementById(`${currentI + question.questionAnswer}label`).innerHTML += '&#9989;';
            if (!shadowRoot.getElementById(`${currentI + question.questionAnswer}`).checked) {
                var incorrectAns = shadowRoot.querySelector(`input[name=answer${currentI}]:checked`);
                if (incorrectAns) {
                    shadowRoot.getElementById(`u${question.questionSkId}`).innerHTML = incorrectAns.id.substr(-1);
                    shadowRoot.getElementById(incorrectAns.id + 'label').innerHTML += '&#10060;';
                }
            } else {
                currentScore.innerHTML = parseInt(currentScore.innerHTML) + 1;
            }
        } else {
            var isCorrect = true;
            var answers = question.questionAnswer.split('');
            const answersSelected = shadowRoot.querySelectorAll(`input[name=answer${currentI}]:checked`);
            if (answersSelected.length !== answers.length) {
                isCorrect = false
            }
            ;
            answersSelected.forEach(selectedAns => {
                shadowRoot.getElementById(`u${question.questionSkId}`).innerHTML += selectedAns.id.substr(-1);
                    if (!answers.includes(selectedAns.id.substr(-1))) {
                        shadowRoot.getElementById(selectedAns.id + 'label').innerHTML += '&#10060;';
                        isCorrect = false;
                    }
                }
            );
            answers.forEach(answer => {
                const elementLabelSelected = shadowRoot.getElementById(`${currentI + answer}label`);
                elementLabelSelected.innerHTML += '&#9989;';
            });
            if (isCorrect) {
                currentScore.innerHTML = parseInt(currentScore.innerHTML) + 1;
            }
        }
        shadowRoot.querySelectorAll(`input[name=answer${currentI}]`).forEach(elem => elem.disabled = true);


        if (parseInt(currentSubmissions.innerHTML) >= numberOfQuestions) {
            shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
            shadowRoot.getElementById(`scoreSection`).style.display = "none";
            const score = parseInt(currentScore.innerHTML);
            shadowRoot.getElementById(`passMessage`).style.display = "inline-block";
            shadowRoot.getElementById(`welcomeMessage`).style.display = "none";
            if (score >= (numberOfQuestions * 0.7)) {

                shadowRoot.getElementById(`passHeader`).innerHTML = `Congrats ${shadowRoot.getElementById('nameInput').value} you passed, Good luck on your exam! Score: ${score}/${numberOfQuestions}`;
            } else {
                shadowRoot.getElementById(`passHeader`).innerHTML = `Oh no! ${shadowRoot.getElementById('nameInput').value} you failed, click Retake test or reload this page to try again. Score: ${score}/${numberOfQuestions}`;
            }
        }
        shadowRoot.getElementById(`${currentI}showAnswer`).disabled = true;
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