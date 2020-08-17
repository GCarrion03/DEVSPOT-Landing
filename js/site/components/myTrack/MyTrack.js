import { DevspotBase } from '/js/site/commons/DevspotBase.js';
import { fetchFromPost } from "/js/site/commons/HttpUtils.js";
class MyTrack extends DevspotBase {
    constants;
    exam;
    myTrackData;
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        this.constants = (await import('/js/site/siteConstants.js')).constants;

        let body = {"examId":this.getAttribute("examId"),"userId":this.userData.username};
        this.exam = await fetchFromPost(this.constants.myTrackEndpoint, body);
        this.myTrackData = this.exam.myTrackData;
        let mytrack = `<div class="col-sm-12 padding-bottom-sm" >
                <div class="col-sm-9">
                    <h4 style="font-weight: bolder;" class="padding-margin-0">Get your Track Score above 80% to pass your exam, guaranteed!</h4>
                </div>
                <div class="col-sm-2"><h4 class="padding-margin-0" style="font-weight: bold;">Track Score:</h4></div>
                <div class="col-sm-1" ><h4 class="padding-margin-0" style="font-weight: bolder"> ${(this.myTrackData.filter(e => e.status === 'correct').length * 100 / this.exam.totalNumberOfQuestions).toFixed(2)}%</h4></div>
                </div>
                <div class="col-sm-12 padding-bottom-md" >
                <div class="col-sm-1 legendText  padding-sides-0">Legend:</div>
                <div class="col-sm-1 userAnswer  padding-sides-0 darkGreen">&nbsp;</div>
                <div class="col-sm-1 legendText  padding-sides-0">Correct</div>
                <div class="col-sm-1 userAnswer  padding-sides-0 darkRed">&nbsp;</div>
                <div class="col-sm-1 legendText  padding-sides-0">Incorrect</div>
                <div class="col-sm-1 userAnswer  padding-sides-0 darkBlue">&nbsp;</div>
                <div class="col-sm-2 legendText  padding-sides-0">Not yet taken</div>
                <div class="col-sm-1"></div>
                <div class="col-sm-2" ><h4 class="padding-margin-0"style="font-weight: bold;">Completed:</h4></div>
                <div class="col-sm-1 padding-bottom-md" >
                    <h4 class="padding-margin-0"> ${(this.myTrackData.filter(e => e.status !== 'notRequested').length * 100 / this.exam.totalNumberOfQuestions).toFixed(2)}%</h4>
                </div>
                </div>
            `;
        this.myTrackData.forEach(userAnswer => {
            let correctAnswerText = '';
            if (userAnswer?.questionAnswer?.length < 2) {
                correctAnswerText += userAnswer.questionOptions.find(x => x.optionId === userAnswer.questionAnswer)?.optionText
            } else {
                userAnswer?.questionAnswer?.split('').forEach(ans => correctAnswerText += userAnswer.questionOptions.find(x => x.optionId === ans)?.optionText + ' ');
            }
            let userAnswerText = '';
            if (userAnswer?.userQuestionAnswer) {
                if (userAnswer?.userQuestionAnswer?.length < 2) {
                    userAnswerText += userAnswer.questionOptions.find(x => x.optionId === userAnswer.userQuestionAnswer)?.optionText
                } else {
                    userAnswer?.userQuestionAnswer?.split('').forEach(ans => userAnswerText += userAnswer.questionOptions.find(x => x.optionId === ans)?.optionText + ' ');
                }
            } else {
                userAnswerText = 'Not answered!';
            }
            let tooltipText = (userAnswer.status !== 'notRequested') ?
                `<span class="basicTooltipText">
                    <strong>Question: </strong>${userAnswer.questionText}<br>
                    <strong>Correct Answer: </strong>  ${correctAnswerText}
                    ${userAnswer.status === 'incorrect' ? '<br><strong>Your Answer: </strong>' +userAnswerText : ''}
                </span>`
                : this.userData?.username ? '<span class="basicTooltipText">Not registered yet!</span>' : '<span class="basicTooltipText">Sign In to track your progress! </span>';
            let answerColor = '';
            switch(userAnswer.status) {
                case 'incorrect':
                    answerColor = 'darkRed';;
                    break;
                case 'correct':
                    answerColor = 'darkGreen';;
                    break;
                case 'notRequested':
                    answerColor = 'darkBlue';;
                    break;
            }
            mytrack += `<div class="col-sm-1 userAnswer basicTooltip padding-sides-0 ${answerColor}">${userAnswer.questionSkId} ${tooltipText}</div>`
        });
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="practiceTest-styles">
                <link href="/layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="/css/bootstrap.css" rel="stylesheet">
                <link href="/css/style.css" rel="stylesheet" type="text/css">
                <link rel="stylesheet" type="text/css" href="/css/roboto_light/stylesheet.css">
                <div class="section-title">
                    <span class="caption d-block small">My Track</span>
                    <h3>${this.exam.examId}</h3>
                    <img src="/images/logo/avail/${this.exam.badgeFile}" class="cert-cred">
                </div>
                <div id="userAnswersContainer" style="min-height: 400px;">
                        ${mytrack}
<!--                    <button type="button" class="stdButton" id="start" style="float: right;" ><i class="fa fa-flag"> Start Assessment</i></button>-->
                </div>
             </template>`
        this.shadowRoot.append(div);
        const template = this.shadowRoot.getElementById(`practiceTest-styles`);
        const node = document.importNode(template.content, true);
        this.shadowRoot.removeChild(div);
        this.shadowRoot.appendChild(node);
    };
}
customElements.define('my-track', MyTrack);