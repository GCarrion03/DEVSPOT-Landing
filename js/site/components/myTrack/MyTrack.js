import { DevspotBase, Role } from '/js/site/commons/DevspotBase.js';
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

        this.userRole = await this.getAssignedUserRole(this.getAttribute("examId"));
        let body = {"examId":this.getAttribute("examId"),"userId":this.userData?.username};
        this.exam = await fetchFromPost(this.constants.myTrackEndpoint, body);
        this.myTrackData = this.exam.myTrackData;
        let mytrack = `<div class="col-sm-12 padding-bottom-md" >
                <div class="col-md-2 col-sm-3 legendText padding-sides-0 text-align-center bold">Track Score:</div>
                <div class="col-md-2 col-sm-3 padding-sides-0 text-align-center basicTooltip bold" >
                    ${(this.myTrackData.filter(e => e.status === 'correct').length * 100 / this.exam.totalNumberOfQuestions).toFixed(2)}%
                    <span class="basicTooltipText">Get your this score above 80% to pass your exam, guaranteed!<br></span>
                </div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0 text-align-center bold" >Completed:</div>
                <div class="col-md-2 col-sm-3 padding-sides-0 text-align-center basicTooltip bold" >
                    ${(this.myTrackData.filter(e => e.status !== 'notRequested').length * 100 / this.exam.totalNumberOfQuestions).toFixed(2)}%
                    <span class="basicTooltipText">Your completion rate.<br></span>
                </div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0 text-align-center bold">Error ratio:</div>
                <div class="col-md-2 col-sm-3 padding-sides-0 text-align-center basicTooltip bold" >
                    ${this.myTrackData.filter(e => e.status === 'correct').length === 0 ? '---' : (100 * this.myTrackData.filter(e => e.status === 'incorrect').length / this.myTrackData.filter(e => e.status === 'correct').length).toFixed(2)}%
                    <span class="basicTooltipText">A good error ratio is less than 30%.<br></span>
                </div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0">Answered:</div>
                <div class="col-md-2 col-sm-3 padding-sides-0 text-align-center bold">${(this.myTrackData.filter(e => e.status !== 'notRequested').length)}</div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0">Correct:</div>
                <div class="col-md-2 col-sm-3 userAnswer padding-sides-0 darkGreen">${(this.myTrackData.filter(e => e.status === 'correct').length)}</div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0">Incorrect:</div>
                <div class="col-md-2 col-sm-3 userAnswer padding-sides-0 darkRed">${(this.myTrackData.filter(e => e.status === 'incorrect').length)}</div>
                <div class="col-md-2 col-sm-3 legendText padding-sides-0">Not yet answered:</div>
                <div class="col-md-2 col-sm-3 userAnswer padding-sides-0 darkBlue">${(this.myTrackData.filter(e => e.status === 'notRequested').length)}</div>
                </div>`;
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
                `<span class="basicTooltipText displayTooltipCenter">
                    <strong>Question: </strong>${userAnswer.questionText}<br>
                    <strong>Correct Answer: </strong>  ${correctAnswerText}
                    ${userAnswer.status === 'incorrect' ? '<br><strong>Your Answer: </strong>' +userAnswerText : ''}
                </span>`
                : this.userData?.username ? '<span class="basicTooltipText displayTooltipCenter">Not registered yet!</span>' : '<span class="basicTooltipText displayTooltipCenter">Sign In to track your progress! </span>';
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
            mytrack += `<div class="col-md-1 col-sm-2 userAnswer basicTooltip padding-sides-0 ${answerColor}">${userAnswer.questionSkId} ${tooltipText}</div>`
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
                    <div class="watermarked ${this.userRole === Role.CONTRIBUTOR ? 'watermarked-contributor' : 'watermarked-free'}">
                        <img src="/images/logo/avail/${this.exam.badgeFile}" class="cert-cred">
                    </div>
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