import { fetchFromPost, fetchFromPut } from "/js/site/commons/HttpUtils.js";
import { paymentModal, renderPaypalButtons } from "/js/site/components/paymentModal/PaymentModal.js";
import { DevspotBase, Role, SimulatorMode } from "/js/site/commons/DevspotBase.js";
import { constants } from "/js/site/siteConstants.js";
import { generateCertificate, CredentialType } from "/js/site/components/certificateGenerator/certificateGenerator.js";
import { DateUtils } from "/js/site/commons/DateUtils.js";

class practiceTest extends DevspotBase {
    constants;
    exam;
    questionBank;
    numberOfQuestions = 10;
    componentRoot = (document.body.querySelector('practice-test'));
    hasFreeDailyQuota = false;
    simulatorMode;

    constructor() {
        super();
        // this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        const examId = this.getAttribute("examId");
        this.userRole = await this.getAssignedUserRole(examId);
        this.constants = (await import('/js/site/siteConstants.js')).constants;
        let body = {"examId": examId,"examProvider":this.getAttribute("examProvider"), "userId": this.userData?.username, "userRole": this.userRole};
        this.exam = await fetchFromPost(this.constants.examEndpoint, body);
        this.questionBank = this.exam.questions;
        if (this.userRole === Role.USER){
            this.hasFreeDailyQuota = this.hasDailyQuota();
        }
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="practiceTest-styles">
                <div class="section-title">
                ${paymentModal}
                    <span class="caption d-block small">Exam</span>
                    <h3>${this.exam.examId}</h3>
                    <div class="watermarked ${this.userRole === Role.CONTRIBUTOR ? 'watermarked-contributor' : 'watermarked-free'}">
                        <img src="/images/logo/avail/${this.exam.badgeFile}" class="cert-cred">
                    </div>
                </div>
                <div id="welcomeMessage" style="min-height: 400px;">
                    <p style="text-align: center;"><strong>${this.exam.examAcronym} (${this.exam.examId})</strong></p>
                    ${this.userRole !== Role.VISITOR ? '<p style="text-align: center;"><strong>My Track: </strong>' + this.exam.myTrackQuestionCount + ' of ' + this.exam.totalNumberOfQuestions + ' Questions Completed (' + (100 * this.exam.myTrackQuestionCount / this.exam.totalNumberOfQuestions).toFixed(2) + '%)</p>' : ''}
                    <p class="selectModeClass" style="text-align: center;">Welcome to the ${this.exam.examProvider} ${this.exam.examName} Exam<span>&nbsp;readiness quiz</span>&nbsp;</p>
                    <p class="selectModeClass">The simulator will pick questions from our curated database of ${this.exam.totalNumberOfQuestions} questions, pass the Exam Mode or get an "Overall Score" of 80% in "My Track" and you will be ready to pass your certification exam.</p>
                    <p class="selectModeClass">Please select your test mode:</p>
                    <ul class="padding-margin-0">
                        <li class="selectModeClass"><strong>Exam Mode</strong>  generates a full 65-question exam (130 minutes - Certificate eligible).</li>
                        <li class="selectModeClass"><strong>Study mode</strong> generates 5, 10, 30 or 65-question tests with answers (10 minutes and up).</li>
                    </ul>      
                    <div class="col-lg-12 padding-sides-0 padding-top-lg padding-bottom-md examModeDetails" style="display: none;">  
                        <div class="text-align-center"><strong>Exam Mode</strong></div>
                        <ul>
                            <li>130 Minutes.</li>
                            <li>65 Questions.</li>
                            <li>If you are not sure of an answer, don't select any option & answer it later.</li>
                            <li>Review not answered questions before submission.</li>
                            <li>Score more than 70% to get your PDF certificate.</li>
                        </ul>
                        <p class="padding-sides-0 padding-top-lg"><strong>Note:</strong> Please provide a valid name as it will be displayed on your certificate and make sure you have enough time to complete your exam (at least 90 minutes) before proceeding.</p>
                    </div>
                    <div class="col-lg-12 padding-sides-0 padding-top-lg padding-bottom-md studyModeDetails" style="display: none;">
                    <div class="text-align-center"><strong>Study mode</strong></div>
                    <ul>
                        <li>Set the number of questions to answer.</li>
                        <li>Check your score as you progress.</li>
                        <li>Validate your answers immediately.</li>
                        <li>Study explanations and investigate further.</li>
                        <li>Save answers to "My Track".</li>
                    </ul> 
                    ${this.userRole === Role.VISITOR ? '<p class="padding-top-lg padding-sides-0"><strong>Note:</strong> Please register to keep track of your completion progress in the "My Tracks" option.</p>' : ''}
                    ${this.userRole === Role.USER ? '<p class="padding-top-lg padding-sides-0"><strong>Note:</strong> Visit us everyday to get 5 more free question saves to this exam Track.</p>' : ''}
                    </div>
                    <br>
                    <div class="col-md-12 padding-sides-0 selectModeClass">
                        <div class="col-md-6 text-align-center padding-top-md padding-sides-0">
                            <button type="button" class="btn stdButton basicTooltip mdMinWidth" id="examModeBtn">
                                <i class="fa fa-dot-circle-o"> Exam Mode</i>
                                <span class="basicTooltipText displayTooltipAlignTextLeft">
                                    <li>130 Minutes.</li>
                                    <li>65 Questions.</li>
                                    <li>If you are not sure of an answer, don't select any option & answer it later.</li>
                                    <li>Review not answered questions before submission.</li>
                                    <li>Score more than 70% to get your PDF certificate.</li>
                                </span>
                            </button>
                        </div>
                        <div class="col-md-6 text-align-center padding-top-md padding-bottom-md padding-sides-0">
                            <button type="button" class="btn stdButton basicTooltip mdMinWidth" id="studyModeBtn">
                            <i class="fa fa-book"> Study Mode</i>
                            <span class="basicTooltipText displayTooltipAlignTextLeft">
                                <li>Set the number of questions to answer.</li>
                                <li>Check your score as you progress.</li>
                                <li>Validate your answers immediately.</li>
                                <li>Study explanations and investigate.</li>
                                <li>Save answers to "My Track".</li>
                            </span>
                            </button>
                        </div>
                    </div>
                    <div class="col-md-12 padding-sides-0" id="examOptionsDiv" style="display: none;">
                        <div class="col-lg-2 text-align-center">
                            <label for="nameInput">Your name: &nbsp;</label>
                        </div>
                        <div class="col-lg-3 text-align-center">
                            <input type="text" id="nameInput" class="display-inline-block">
                        </div>
                        <div class="col-lg-2 text-align-center">
                            <label for="examLength">&nbsp; Exam Length: &nbsp;</label>
                        </div>
                        <div class="col-lg-5 text-align-center">
                            <select name="examLength" id="examLength" class="display-inline-block">
                              <option value="5">5 Questions${this.hasFreeDailyQuota ? ' (Free Daily Save)' : ''}</option>
                              <option value="10">10 Questions</option>
                              ${this.userData ? '<option value="30">30 Questions</option>' : '<option value="30" disabled>(Sign In) 30 Questions</option>'} 
                              ${this.userData ? '<option value="65">65 Questions</option>' : '<option value="65" disabled>(Sign In) 65 Questions</option>'} 
                              ${this.userRole === Role.CONTRIBUTOR && (this.exam.myTrackQuestionCount > 0) ? '<option value="-1">All My Incorrect Questions</option>' : '<option value="1" disabled>(Contributor)All My Incorrect Questions</option>'} 
                            </select>
                        </div>
                        <div class="col-md-12 padding-sides-0">
                            <div class="col-md-6 text-align-center padding-top-lg padding-bottom-md padding-sides-0">
                                <button type="button" class="btn stdButton mdMinWidth" id="goBackBtn"><i class="fa fa-step-backward">  To simulator mode Selection</i></button>
                            </div>
                            <div class="col-md-6 text-align-center padding-top-lg padding-bottom-md padding-sides-0">
                                <button type="button" class="btn stdButton mdMinWidth" id="start"><i class="fa fa-flag"> Start Assessment</i></button>
                            </div>
                        </div>
                    </div>
                </div>
             </template>`
        this.componentRoot.append(div);
        const template = this.componentRoot.querySelector(`#practiceTest-styles`);
        const node = document.importNode(template.content, true);
        this.componentRoot.innerHTML='';
        this.componentRoot.appendChild(node);
        this.setExamSetupActions();
    };

    setExamSetupActions () {
        this.componentRoot.querySelector(`#goBackBtn`).onclick = () => {
            this.componentRoot.querySelector(`#examOptionsDiv`).style.display = "none";
            this.componentRoot.querySelectorAll(`.selectModeClass`).forEach(x => x.style.display = 'block');
            this.componentRoot.querySelectorAll(`.examModeDetails`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelectorAll(`.studyModeDetails`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelector(`#examLength`).disabled = false;
            this.componentRoot.querySelector(`#examLength`).value = 5;
            this.simulatorMode = '';
        };
        this.componentRoot.querySelector(`#studyModeBtn`).onclick = () =>
        {
            this.componentRoot.querySelector(`#examOptionsDiv`).style.display = "block";
            this.componentRoot.querySelectorAll(`.selectModeClass`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelectorAll(`.studyModeDetails`).forEach(x => x.style.display = 'block');
            this.componentRoot.querySelectorAll(`.examModeDetails`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelector(`#nameInput`).value = (this?.userData?.username || 'Unidentified Candidate');
            this.componentRoot.querySelector(`#nameInput`).onkeyup = () => { };
            this.componentRoot.querySelector(`#start`).disabled = false;
            this.simulatorMode = SimulatorMode.STUDY;
        };
        this.componentRoot.querySelector(`#examModeBtn`).onclick = () =>
        {
            this.componentRoot.querySelector(`#examOptionsDiv`).style.display = "block";
            this.componentRoot.querySelectorAll(`.selectModeClass`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelectorAll(`.examModeDetails`).forEach(x => x.style.display = 'block');
            this.componentRoot.querySelectorAll(`.studyModeDetails`).forEach(x => x.style.display = 'none');
            this.componentRoot.querySelector(`#nameInput`).value = '';
            this.componentRoot.querySelector(`#nameInput`).onkeyup = () => { if (this.componentRoot.querySelector(`#nameInput`).value!==''){ document.querySelector(`#start`).disabled = false } else {document.querySelector(`#start`).disabled = true }};
            this.componentRoot.querySelector(`#start`).disabled = true;
            this.componentRoot.querySelector(`#examLength`).disabled = true;
            this.componentRoot.querySelector(`#examLength`).value = 65;
            this.simulatorMode = SimulatorMode.EXAM;
        };
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
    }

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

        let examQuestionInfo;
        if (this.numberOfQuestions > 0) {
            examQuestionInfo = (await fetchFromPost(this.constants.questionEndpoint, body));
        } else {
            examQuestionInfo = (await fetchFromPost(this.constants.myTrackEndpoint, body));
            examQuestionInfo.questions = examQuestionInfo.myTrackData.filter(x => x.status === 'incorrect');
            examQuestionInfo.myTrackQuestionCount = examQuestionInfo.myTrackData.length;
            examQuestionInfo.examQuestionCount = examQuestionInfo.questions.length;
            this.numberOfQuestions = examQuestionInfo.examQuestionCount;
        }

        let div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="master-section">
                <div id="passMessage" style="display:none;min-height: 400px;" class="col-lg-12 padding-sides-0">
                    <div id="passHeader" class="col-lg-12 padding-bottom-lg" style="min-height: 20px;"></div>
                    <div class="col-lg-4 text-align-center padding-sides-0">
                        <button class="btn stdButton mdMinWidth" type="button" id="btnRetake" onclick="window.location.reload();" ><i class="fa fa-repeat"> Try again!</i> </button>
                    </div>
                    <div class="col-lg-4 text-align-center padding-sides-md">
                        ${this.getSaveToMyTrackMenu(examQuestionInfo.myTrackQuestionCount, examQuestionInfo.examQuestionCount)}
                    </div>
                    <div class="col-lg-4 text-align-center padding-sides-md">
                        <button class="btn stdButton mdMinWidth examModeElement" type="button" id="btnGetCertificate" disabled><i class="fa fa-file-pdf-o"> Download Certificate!</i> </button>
                    </div>
                </div>
                <div id="scoreSection" style="display:none;" class="col-lg-12">
                    <div class="col-lg-12" style="min-height: 25px; border-bottom: 1px solid black;">
                            <label style="float: left;" class="examModeElement">Time remaining: &nbsp;</label><span id="time" style="float: left;" class="examModeElement">00:00</span>
                            <label style="float: right;">/&nbsp;${this.numberOfQuestions}</label>
                            <label id="currentSubmissions" style="float: right;color: dodgerblue; margin: 0px 0.5em;">0</label>
                            <label style="float: right;color: dodgerblue;" class="studyModeElement">&nbsp;/</label>
                            <label name="score" id="currentScore" style="float: right; color: green" class="studyModeElement">0</label>
                            <label style="float: right;" class="studyModeElement">Score: &nbsp;</label>
                            <label style="float: right; padding-left: 2px;" class="examModeElement"> Answered: &nbsp;</label>
                    </div>
                </div>
             </template>`;
        this.componentRoot.append(div);
        const template = this.componentRoot.querySelector(`#master-section`);
        const node = document.importNode(template.content, true);
        this.componentRoot.removeChild(div);
        this.componentRoot.appendChild(node);

        const examDuration = this.exam.timePerQuestion * this.numberOfQuestions;
        const display = this.componentRoot.querySelector('#time');
        startTimer(examDuration, display);
        let i = 1;
        let myExamSummary = '';


        examQuestionInfo.questions.forEach(question => {
            let questionOptions = '';
            question.questionOptions.forEach(option => {
                questionOptions += ('<span style="display: inline-flex;"><input id="option' + i + option.optionId + '" name="answer' + i + '" type="' + (question?.questionAnswer?.length === 1 ? 'radio' : 'checkbox') +
                    '" style="float: left;"><label id="label' + i + option.optionId + '" for="option' + i + option.optionId + '" style="padding-left: 5px;float: left;font-weight: 100;">' +
                    option.optionId + '. ' + option.optionText + '<span class="studyModeElement" id="labelMark' + i + option.optionId + '"></span></label></span><br>');
            });
            const div = document.createElement('div');
            div.id = "tmpDiv";
            div.innerHTML =
                `<template id="practiceTest-template${i}">
                <div class="row" id="questionContainer${i}" style = "display:none">
                    <div class="col-lg-12" style="min-height: 400px;">
                        <h5 class="mb-3" style="margin-top:5px;"><strong id="questionDescription"></strong></h5>
                        <div style="border-bottom: 1px solid black;"></div>
                        <br>
                            ${questionOptions}
                        <div class="studyModeElement">
                            <div id="divQuestionExplanation${i}"></div>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <button id="prev${i}" class="btn stdButton" type="button" value="<" style="float: left;"><i class="fa fa-arrow-left"></i></button>
                        <button id="next${i}" class="btn stdButton" type="button" value=">" style="float: left;"><i class="fa fa-arrow-right"></i></button>
                    </div>
                    <div class="col-lg-9">
                        <button id="goToSummary${i}" class="btn stdButton mdMinWidth goToSummary" type="button" style="float: right; display: none;" >
                            <i class="fa fa-table">
                                To Exam Review
                            </i>
                        </button>
                        <button id="showAnswer${i}" class="btn stdButton mdMinWidth studyModeElement" type="button" style="float: right;" >
                            <i class="fa fa-check-square-o">
                                Check Answer
                            </i>
                        </button>
                    </div>
                </div>
            </template>`;
            this.componentRoot.append(div);
            const template = this.componentRoot.querySelector(`#practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.querySelector('#questionDescription').innerHTML = `${i}. (${question.questionSkId}) ${question.questionText}
                                            <p style="display:none">${question.questionId}</p>
                                            <label class="userAnswer" id="u${question.questionSkId}" style="display:none"></label>
                                            <label id="isUserAnswerCorrect${i}" style="display:none"></label>`;
            this.componentRoot.removeChild(div);
            this.componentRoot.appendChild(node);
            let createValidateButton = function (shadowRoot, currentI, question, numberOfQuestions, simulatorMode) {
                return {
                    apply: function () {
                        makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions, simulatorMode);
                    }
                }
            };
            let a = createValidateButton(this.componentRoot, i, question, this.numberOfQuestions, this.simulatorMode);
            a.apply();
            myExamSummary += `<div class="col-md-1 col-xs-2 userAnswer basicTooltip padding-sides-0 darkGray cursor-pointer" onclick="goToQuestion(${i})" id="examSummary${i}">${i}</div>`;
            i++;
        });

        this.appendSummarySection(myExamSummary);

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
                await fetchFromPut(this.constants.myTrackEndpoint, myTrackItems);
                this.componentRoot.querySelector(`#btnSaveToMyTrack`).style.display = 'none';
                this.componentRoot.querySelector('#btnShowMyTrack').style.display = 'inline-block';
            };
        }
        if (this.simulatorMode === SimulatorMode.STUDY) {
            this.componentRoot.querySelectorAll(`.examModeElement`).forEach(x => x.style.display = 'none');
        } else {
            this.componentRoot.querySelector(`#btnGetCertificate`).onclick = () => { this.downloadCertificate(); };
            this.componentRoot.querySelectorAll(`.studyModeElement`).forEach(x => x.style.display = 'none');
        }

        this.enableStart();
    }

    appendSummarySection(myExamSummary){
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="simulator-summary">
                <div id="userAnswersContainer" style="min-height: 400px; display: none;" class="col-lg-12 padding-sides-0">
                    <div class="col-sm-6 padding-tb-lg padding-sides-0 text-align-center"><h4 class="bold">Exam Review</h4></div>
                    <div class="col-sm-6 padding-tb-lg padding-sides-0 text-align-center">
                        <button class="btn stdButton mdMinWidth" type="button" id="btnFinishExam"><i class="fa fa-check-square-o"> Finish Exam</i></button>
                    </div>
                    <div class="col-md-2 col-sm-3 legendText padding-sides-0">Total Questions:</div>
                    <div class="col-md-2 col-sm-3 padding-sides-0 text-align-center bold" id="totalQuestions">${this.numberOfQuestions}</div>
                    <div class="col-md-2 col-sm-3 legendText padding-sides-0"><span class="studyModeElement">Checked:</span><span class="examModeElement">Answered:</span>  </div>
                    <div class="col-md-2 col-sm-3 userAnswer padding-sides-0 darkLimeGreen" id="totalAnswered">0</div>
                    <div class="col-md-2 col-sm-3 legendText padding-sides-0"><span class="studyModeElement">Not Checked:</span><span class="examModeElement">Not Answered:</span></div>
                    <div class="col-md-2 col-sm-3 userAnswer padding-sides-0 darkGray" id="totalNotAnswered">${this.numberOfQuestions}</div>
                    <div class="col-md-3 col-sm-3 legendText padding-sides-0 studyModeElement">Correct:</div>
                    <div class="col-md-3 col-sm-3 userAnswer padding-sides-0 darkGreen studyModeElement" id="reviewCorrect">0</div>
                    <div class="col-md-3 col-sm-3 legendText padding-sides-0 studyModeElement">Incorrect:</div>
                    <div class="col-md-3 col-sm-3 userAnswer padding-sides-0 darkRed studyModeElement" id="reviewIncorrect">0</div>
                    ${myExamSummary}
                </div>
                <script>
                    
                </script>
             </template>`;
        const config = document.createElement('script');
        config.innerHTML =
            `function goToQuestion(i) {
                        document.querySelectorAll('.goToSummary').forEach(x => x.style.display = 'inline');
                        document.querySelector('#questionContainer' + i).style.display = "inline";
                        document.querySelector('#userAnswersContainer').style.display = "none";
                    }`;
        this.componentRoot.appendChild(config);
        this.componentRoot.append(div);
        const templateSummary = this.componentRoot.querySelector(`#simulator-summary`);
        const nodeSummary = document.importNode(templateSummary.content, true);
        this.componentRoot.removeChild(div);
        this.componentRoot.appendChild(nodeSummary);
        this.componentRoot.querySelector(`#btnFinishExam`).onclick = () => {
            this.finishExamAndGenerateSummary();
        }
    }

    finishExamAndGenerateSummary () {
        document.querySelector('#userAnswersContainer').style.display = "none";
        const currentScore = this.componentRoot.querySelector(`label[id=currentScore]`);
        this.componentRoot.querySelector(`#questionContainer${this.numberOfQuestions}`).style.display = "none";
        this.componentRoot.querySelector(`#scoreSection`).style.display = "none";
        const score = parseInt(currentScore.innerHTML);
        this.componentRoot.querySelector(`#passMessage`).style.display = "inline-block";
        this.componentRoot.querySelector(`#welcomeMessage`).style.display = "none";
        let resultStr = `<div class="col-xs-12 padding-sides-0 padding-bottom-lg">
                                        <div class="col-xs-6 padding-sides-0 bold">Candidate:</div><div class="col-xs-6 padding-sides-0">${this.componentRoot.querySelector('#nameInput').value ? this.componentRoot.querySelector('#nameInput').value : 'Unidentified Candidate'}</div>
                                        <div class="col-xs-6 padding-sides-0 bold">Exam Id:</div><div class="col-xs-6 padding-sides-0">${this.exam.examId}</div>
                                        <div class="col-xs-6 padding-sides-0 bold">Exam Name:</div><div class="col-xs-6 padding-sides-0">${this.exam.examProvider} - ${this.exam.examName}</div>
                                        <div class="col-xs-6 padding-sides-0 bold">Score:</div><div class="col-xs-6 padding-sides-0">${(100 * score / this.numberOfQuestions).toFixed(2)}%</div>  
                                        <div class="col-xs-6 padding-sides-0 bold">Correct:</div><div class="col-xs-6 padding-sides-0">${score}</div>
                                        <div class="col-xs-6 padding-sides-0 bold">Incorrect:</div><div class="col-xs-6 padding-sides-0">${this.numberOfQuestions - score}</div>  
                                        <div class="col-xs-6 padding-sides-0 bold">Total:</div><div class="col-xs-6 padding-sides-0">${this.numberOfQuestions}</div>
                            </div>`;
        let modeResultStr = '';
        if (score >= (this.numberOfQuestions * 0.7)) {
            if (this.simulatorMode === SimulatorMode.EXAM) {
                modeResultStr = `<p>Congratulations! ${this.componentRoot.querySelector('#nameInput').value} you did it!, 79% of candidates fail this exam, display it proudly as attaining this certificate is a demonstration of your knowledge in the "${this.exam.examName}" official exam topics and celebrate this milestone with your peers by downloading your PDF certificate below, sharing and adding it to your LinkedIn profile.
                    <a onclick="window.open(\`https://www.linkedin.com/profile/add?startTask=CERTIFICATION_NAME&name=${this.exam.examProvider} - ${this.exam.examName}(DEVSPOT)&organizationId=70063851&issueYear=${new Date().getFullYear()}
                    &issueMonth=${new Date().getMonth()}&expirationYear=${new Date().getFullYear() + 3}&expirationMonth=${new Date().getMonth()}&certId=${this.examGUID}&certUrl=https://devspot.org/${this.exam.examId}.html?credId%3D${this.examGUID}\`)"
                    href="#"><img src="https://download.linkedin.com/desktop/add2profile/buttons/en_US.png " alt="LinkedIn Add to Profile button"></a></p>
                    <br><p style="text-align: center; font-weight: bold;">“You are now ready to ace your certification exam, go and crush it, Good Luck!” - @gusmcarrion</p>`;
                this.componentRoot.querySelector(`#btnGetCertificate`).disabled = false;
            } else {
                modeResultStr = `<p>Nice job! you are on the right path!, save your results to "My Track" to continue your preparation or you can give a try to "Exam Mode" if you feel ready and want to get a PDF certificate.</p>
                                 <br><p style="text-align: center;font-weight: bold;">“Successful people are not gifted; they just work hard, then succeed on purpose.” – G.K. Nielson</p>`;
            }
        } else {
            if (this.simulatorMode === SimulatorMode.EXAM) {
                modeResultStr = `<p>Oh no! ${this.componentRoot.querySelector('#nameInput').value} you failed, to get your PDF certificate you must score at least 70%, use the "Study Mode" to practice and research the questions before trying this exam again or the "${this.exam.examName}" official exam. Click Retake test to go back to the exam selection mode to try again.</p>
                                <br><p style="text-align: center;font-weight: bold;">“It’s fine to celebrate success but it is more important to heed the lessons of failure.” – Bill Gates</p>`;
            } else {
                modeResultStr = `<p>Nice effort! but this will not be enough to get your certification, click save results to "My Track" and try again, periodically review you incorrect answers in "My Track" and research these topics.</p>
                                <br><p style="text-align: center;font-weight: bold;">“It’s not what you do once in a while it’s what you do day in and day out that makes the difference.” – Jenny Craig</p>`
            }
        }
        this.componentRoot.querySelector(`#passHeader`).innerHTML = resultStr + modeResultStr;
    }

    downloadCertificate() {
        if (parseInt(currentScore.innerHTML) >= (this.numberOfQuestions * 0.7)) {
            let date = new Date();
            const issueDate = DateUtils.getDateMMMDDYYYY(date);
            date = date.setFullYear(new Date().getFullYear() + 3);
            const expiryDate = DateUtils.getDateMMMDDYYYY(date);
            generateCertificate (CredentialType.EXAM, this.componentRoot.querySelector('#nameInput').value, this.exam.examId, this.exam.examName, issueDate,
                expiryDate, this.exam.providerAcronym, this.examGUID, `https://devspot.org/${this.exam.examId}.html?credId=${this.examGUID}`);
            const body = [
                {
                    userId: this.userData?.username || this.componentRoot.querySelector('#nameInput').value,
                    credId: this.examGUID,
                    examId: this.exam.examId,
                    credType: CredentialType.EXAM.name}];
            fetchFromPut(constants.credentialEndpoint, body).then();
        }
    }

    enableStart() {
        this.componentRoot.querySelector(`#welcomeMessage`).style.display = "none";
        this.componentRoot.querySelector(`#questionContainer1`).style.display = "inline";
        this.componentRoot.querySelector(`#scoreSection`).style.display = "inline";
        this.componentRoot.querySelector(`#prev1`).disabled = true;
    }

    getSaveToMyTrackMenu(consumedQuota, toBeConsumedQuota){
        let strToReturn = `<label id="consumedQuota" style="display: none;">${consumedQuota + toBeConsumedQuota}</label>`;
        strToReturn += `<i id="cogLoading" class="fa fa-cog fa-spin fa-2x fa-fw" style="display: none"></i>`;
        switch (this.userRole) {
            case (Role.CONTRIBUTOR):
                strToReturn += '<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnSaveToMyTrack" ><i class="fa fa-save"> Save results to "My Track"</i></button>';
                strToReturn += `<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnShowMyTrack" style="display: none" onclick="window.location.href='/mytrack/${this.exam.examId}.html'"><i class="fa fa-map"> Go to "My Track"</i></button>`;
                break;
            case (Role.USER):
                if ((consumedQuota + toBeConsumedQuota) > 30 && !(toBeConsumedQuota <= 5 && this.hasFreeDailyQuota)) {
                    strToReturn += '<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnSaveToMyTrack" style="display: none"><i class="fa fa-save"> Save results to "My Track"</i></button>';
                    strToReturn += '<button id="btnContribute" type="button" class="btn stdButton basicTooltip white-space-normal" data-toggle="modal" data-target="#myModal"><i class="fa fa-credit-card-alt"> Share us, or get Contributor Access to save your results</i><span class="col-sm-1 basicTooltipText" style="left: -15px;">You have used "My Track" 30 questions free quota, share this page using the share buttons below&#128317; to save up to 65 questions or get contributor access to unlock all the features!<br></span></button>';
                } else {
                    strToReturn += '<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnSaveToMyTrack" ><i class="fa fa-save"> Save results to "My Track"</i><span class="col-sm-1 basicTooltipText">Save up to 30 questions to "My Track", then get 5 more question saves Everyday!</span></button>';
                }
                strToReturn += `<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnShowMyTrack" style="display: none" onclick="window.location.href='/mytrack/${this.exam.examId}.html'"><i class="fa fa-map"> Go to "My Track"</i></button>`;
                break;
            case (Role.VISITOR):
                strToReturn = '<button class="btn stdButton basicTooltip mdMinWidth" type="button" id="btnSaveToMyTrack"  disabled><i class="fa fa-save"> Save results to "My Track"</i><span class="col-sm-1 basicTooltipText">Sign In to save up to 30 questions in "My Track"<br></span></button>';
                break;
        }
        return strToReturn;
    }

    hasDailyQuota(){
        const today = new Date();
        today.setUTCHours(0,0,0,0);
        // if the user has not saved questions today allow him to save
        if (today.getTime() > this.exam.lastSavedDate){
            return true;
        } else {
            return false
        }
    }
}

customElements.define('practice-test', practiceTest);


function makeValidateCallback(shadowRoot, currentI, question, numberOfQuestions, simulatorMode) {
    const correctMark = '&#9989;';
    const incorrectMark = '&#10060;';
    const currentScore = shadowRoot.querySelector(`label[id=currentScore]`);
    const currentSubmissions = shadowRoot.querySelector(`label[id=currentSubmissions]`);

    shadowRoot.querySelector(`#goToSummary${currentI}`).onclick = () => {
        shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
        shadowRoot.querySelector(`#userAnswersContainer`).style.display = "inline-block";
    };

    shadowRoot.querySelector(`#next${currentI}`).onclick = () => {
        shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
        if (currentI === numberOfQuestions) {
            shadowRoot.querySelector(`#userAnswersContainer`).style.display = "inline-block";
        } else {
            shadowRoot.querySelector(`#questionContainer${currentI + 1}`).style.display = "inline";
            shadowRoot.querySelector(`#prev${currentI + 1}`).disabled = false;
        }
    };

    shadowRoot.querySelector(`#prev${currentI}`).onclick = () => {
        shadowRoot.querySelector(`#questionContainer${currentI}`).style.display = "none";
        shadowRoot.querySelector(`#questionContainer${currentI - 1}`).style.display = "inline";
        shadowRoot.querySelector(`#next${currentI - 1}`).disabled = false;
        if (currentI - 1 === 1) {
            shadowRoot.querySelector(`#prev${currentI - 1}`).disabled = true;
        }
    };

    function validateAnswer() {
        var isCorrect = true;
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
            shadowRoot.querySelector(`#labelMark${currentI + question.questionAnswer}`).innerHTML = correctMark;
            if (!shadowRoot.querySelector(`#option${currentI + question.questionAnswer}`).checked) {
                isCorrect = false;
                if (selectedAns) {
                    shadowRoot.querySelector('#labelMark' + selectedAns.id.replace('option', '')).innerHTML = incorrectMark;
                }
            }
            shadowRoot.querySelector(`#u${question.questionSkId}`).innerHTML += (selectedAns?.id?.substr(-1)) ? selectedAns?.id?.substr(-1) : '';
        } else {
            var answers = question.questionAnswer.split('');
            const answersSelected = shadowRoot.querySelectorAll(`input[name=answer${currentI}]:checked`);
            if (answersSelected.length !== answers.length) {
                isCorrect = true;
            }
            answersSelected.forEach(selectedAns => {
                    shadowRoot.querySelector(`#u${question.questionSkId}`).innerHTML += selectedAns.id.substr(-1);
                    if (!answers.includes(selectedAns.id.substr(-1))) {
                        shadowRoot.querySelector('#labelMark' + selectedAns.id.replace('option', '')).innerHTML = incorrectMark;
                        isCorrect = false;
                    }
                }
            );
            answers.forEach(answer => {
                const elementLabelSelected = shadowRoot.querySelector(`#labelMark${currentI + answer}`);
                elementLabelSelected.innerHTML = correctMark;
            });
        }
        if (isCorrect) {
            currentScore.innerHTML = parseInt(currentScore.innerHTML) + 1;
        }
        shadowRoot.querySelector(`#isUserAnswerCorrect${currentI}`).innerHTML = isCorrect;
        updateSummarySection();

        if (simulatorMode === SimulatorMode.STUDY) {
            shadowRoot.querySelector(`#showAnswer${currentI}`).disabled = true;
            shadowRoot.querySelectorAll(`input[name=answer${currentI}]`).forEach(elem => elem.disabled = true);
        }
    }

    shadowRoot.querySelector(`#showAnswer${currentI}`).onclick = () => {
        validateAnswer();
    };

    if (simulatorMode === SimulatorMode.EXAM) {
        let inputs = document.querySelectorAll(`input[name=answer${currentI}]`);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].addEventListener('change', function () {
                if (shadowRoot.querySelector(`#isUserAnswerCorrect${currentI}`).innerHTML !== '') {
                    shadowRoot.querySelector(`#u${question.questionSkId}`).innerHTML = '';
                    currentSubmissions.innerHTML = parseInt(currentSubmissions.innerHTML) - 1;
                    if (shadowRoot.querySelector(`#isUserAnswerCorrect${currentI}`).innerHTML === 'true') {
                        currentScore.innerHTML = parseInt(currentScore.innerHTML) - 1;
                    }
                }
                validateAnswer();
            }.bind(this, i));
        }
    }

    function updateSummarySection() {
        shadowRoot.querySelector(`#totalAnswered`).innerHTML = shadowRoot.querySelector(`#currentSubmissions`).innerHTML;
        shadowRoot.querySelector(`#totalNotAnswered`).innerHTML = numberOfQuestions - +(shadowRoot.querySelector(`#currentSubmissions`).innerHTML);
        if (simulatorMode === SimulatorMode.EXAM) {
            if (shadowRoot.querySelector(`#isUserAnswerCorrect${currentI}`).innerHTML !=='') {
                shadowRoot.querySelector(`#examSummary${currentI}`).classList.add('darkLimeGreen');
                shadowRoot.querySelector(`#examSummary${currentI}`).classList.remove('darkGray');
            }
        } else {
            shadowRoot.querySelector(`#examSummary${currentI}`).classList.remove('darkGray');
            shadowRoot.querySelector(`#reviewCorrect`).innerHTML = shadowRoot.querySelector(`#currentScore`).innerHTML;
            shadowRoot.querySelector(`#reviewIncorrect`).innerHTML = +(shadowRoot.querySelector(`#totalAnswered`).innerHTML) - +(shadowRoot.querySelector(`#reviewCorrect`).innerHTML);
            if (shadowRoot.querySelector(`#isUserAnswerCorrect${currentI}`).innerHTML ==='true') {
                shadowRoot.querySelector(`#examSummary${currentI}`).classList.add('darkGreen');
            } else {
                shadowRoot.querySelector(`#examSummary${currentI}`).classList.add('darkRed');
            }

        }
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