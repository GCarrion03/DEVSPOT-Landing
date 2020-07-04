const numberOfQuestions = 10;



class practiceTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode: 'open'});
    }

    async connectedCallback() {
        var originalQuestionBank = await import(this.getAttribute("questionBankPath"));
        var questionBank = originalQuestionBank.questionBank;
        let i = 1;
        var questions = [];
        var iterator;
        for (iterator = 0; iterator < numberOfQuestions; iterator++) {
            var questionToAdd = questionBank[Math.floor(Math.random() * questionBank.length)];
            if (questionToAdd.questionAnswer && questionToAdd.questionAnswer.length <= 4) {
                questions.push(questionToAdd);
            } else {
                console.error(`error on question ${questionToAdd.questionId} answer: ${questionToAdd.questionAnswer}` );
                iterator--;
            }
        }
        const div = document.createElement('div');
        div.id = "tmpDiv";
        div.innerHTML =
            `<template id="practiceTest-styles">
                <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="css/bootstrap.css" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet" type="text/css">
                <div id="welcomeMessage" style=" min-height: 400px;">
                    <p style="text-align: center;"><strong>AWS-CSAA (SAA-C02)</strong></p>
                    <p style="text-align: center;">Welcome to the Amazon Web Services Certified Solutions Architect Associate Exam<span>&nbsp;readiness quiz</span>&nbsp;</p>
                    <p>We will randomly select 10 questions from our curated database, score more than 7/10 and you will be ready to sit for your exam</p> 
                    <br>
                    <label for="nameInput" style="float: left;">Your name: &nbsp;</label><input type="text" id="nameInput" style="float: left;" ><input type="button" id="start" value="Start Assessment" style="float: right;" >
                </div>
                <div id="passMessage" style = "display:none;">
                    <h4 id="passHeader" style="min-height: 50px;">Pass</h4>                    
                    <input type="button" id="btnCertificate" value="Get your certificate!" style="float: right;" >
                </div>
                <div id="failMessage" style = "display:none;">
                    <h4 id="failHeader" style="min-height: 50px;">Fail</h4> 
                    <input type="button" id="btnRetake" value="Retake test" style="float: right;" onclick="location = location;" >
                </div>
             </template>`
        this.shadowRoot.append(div);
        const template = this.shadowRoot.getElementById(`practiceTest-styles`);
        const node = document.importNode(template.content, true);
        this.shadowRoot.removeChild(div);
        this.shadowRoot.appendChild(node);

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
                    <div class="col-lg-12" style="min-height: 400px">
                        <h5 class="mb-3"><strong id="questionDescription">1. A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster.<br>Which action will encrypt the data at rest?</strong></h5>
                        <BR>
                            ${questionOptions}
                    </div>
                    <div class="col-lg-12">
                        <input id="prev${i}" type="button" value="<" style="float: left;">
                        <input id="next${i}" type="button" value=">" style="float: left;">
                        <input id="${i}showAnswer" type="button" value="Check Answer" style="float: right;" >
                        <strong><label for="${i}showAnswer" style="float: right;">/${questions.length}&nbsp;</label><label name="score" for="${i}showAnswer" id="currentScore${i}" style="float: right;">0</label><label for="${i}showAnswer" style="float: right;">Score: &nbsp;</label></strong> 
                    </div>
                </div>
            </template>`;
            this.shadowRoot.append(div);
            const template = this.shadowRoot.getElementById(`practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.getElementById('questionDescription').innerHTML = `${i}. ${question.questionText}<p style="display:none">${question.questionId}</p>`;
            this.shadowRoot.removeChild(div);
            this.shadowRoot.appendChild(node);
            var createValidateButton = function (shadowRoot, currentI, question) {
                return {
                    apply: function () {
                        makeValidateCallback(shadowRoot, currentI, question);
                    }
                }
            }
            var a = createValidateButton(this.shadowRoot, i, question);
            a.apply();
            i++;
        });
    };
}

customElements.define('practice-test', practiceTest);

function makeValidateCallback(shadowRoot, currentI, question) {
    if (currentI === 1) {
        shadowRoot.getElementById(`start`).onclick = () => {
            shadowRoot.getElementById(`welcomeMessage`).style.display = "none";
            shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "inline";
            shadowRoot.getElementById(`prev${currentI}`).disabled = true;
        }
    }

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

        if (question.questionAnswer && question.questionAnswer.length === 1) {
            shadowRoot.getElementById(`${currentI + question.questionAnswer}label`).innerHTML += '&#9989;';
            if (!shadowRoot.getElementById(`${currentI + question.questionAnswer}`).checked) {
                var incorrectAns = shadowRoot.querySelector(`input[name=answer${currentI}]:checked`);
                if (incorrectAns) {
                    shadowRoot.getElementById(incorrectAns.id + 'label').innerHTML += '&#10060;';
                }
            } else {
                shadowRoot.querySelectorAll(`label[name=score]`).forEach(e => e.innerHTML = parseInt(e.innerHTML) + 1);
            }
        } else {
            var isCorrect = true;
            var answers = question.questionAnswer.split('');
            const answersSelected = shadowRoot.querySelectorAll(`input[name=answer${currentI}]:checked`);
            if (answersSelected.length !== answers.length) { isCorrect = false };
            answersSelected.forEach(selectedAns => {
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
                shadowRoot.querySelectorAll(`label[name=score]`).forEach(e => e.innerHTML = parseInt(e.innerHTML) + 1);
            }
        }


        if (shadowRoot.querySelectorAll(`input[name^=answer]:checked`).length >= 10) {
            shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
            const score = parseInt(shadowRoot.querySelector(`label[name=score]`).innerHTML);
            if (score >= 7) {
                shadowRoot.getElementById(`passMessage`).style.display = "inline-block";
                shadowRoot.getElementById(`welcomeMessage`).style.display = "none";
                shadowRoot.getElementById(`passHeader`).innerHTML = `Congrats ${shadowRoot.getElementById('nameInput').value} you passed, Good luck on your exam! Score: ${score}/${numberOfQuestions}`;
            } else {
                shadowRoot.getElementById(`failMessage`).style.display = "inline-block";
                shadowRoot.getElementById(`welcomeMessage`).style.display = "none";
                shadowRoot.getElementById(`failHeader`).innerHTML = `Oh no! ${shadowRoot.getElementById('nameInput').value} you failed, click Retake test to try again. Score: ${score}/${numberOfQuestions}`;
            }

        }
        shadowRoot.getElementById(`${currentI}showAnswer`).disabled = true;
    }
}