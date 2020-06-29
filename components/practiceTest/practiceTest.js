const questions = [
    {
        "questionId": 1,
        "questionText": "A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster.<br>Which action will encrypt the data at rest?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Place the Redshift cluster in a private subnet."
            },
            {
                "optionId": "B",
                "optionText": "Use the AWS KMS Default Customer master key."
            },
            {
                "optionId": "C",
                "optionText": "Encrypt the Amazon EBS volumes."
            },
            {
                "optionId": "D",
                "optionText": "Encrypt the data using SSL/TLS."
            }
        ],
        "questionAnswer": "B"
    },
    {
        "questionId": 2,
        "questionText": "A website experiences unpredictable traffic. During peak traffic times, the database is unable to keep up with the write request.<br>Which AWS service will help decouple the web application from the database?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon SQS"
            },
            {
                "optionId": "B",
                "optionText": "Amazon EFS"
            },
            {
                "optionId": "C",
                "optionText": "Amazon S3"
            },
            {
                "optionId": "D",
                "optionText": "AWS Lambda"
            }
        ],
        "questionAnswer": "A"
    },
    {
        "questionId": 3,
        "questionText": "A legacy application needs to interact with local storage using iSCSI. A team needs to design a reliable storage solution to provision all new storage on AWS.<br>Which storage solution meets the legacy application requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "AWS Snowball storage for the legacy application until the application can be re-architected."
            },
            {
                "optionId": "B",
                "optionText": "AWS Storage Gateway in cached mode for the legacy application storage to write data to Amazon S3."
            },
            {
                "optionId": "C",
                "optionText": "AWS Storage Gateway in stored mode for the legacy application storage to write data to Amazon S3."
            },
            {
                "optionId": "D",
                "optionText": "An Amazon S3 volume mounted on the legacy application server locally using the File Gateway service."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 4,
        "questionText": "A Solutions Architect is designing an architecture for a mobile gaming application. The application is expected to be very popular. The Architect needs to prevent the Amazon RDS MySQL database from becoming a bottleneck due to frequently accessed queries.<br>Which service or feature should the Architect add to prevent a bottleneck?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Multi-AZ feature on the RDS MySQL Database"
            },
            {
                "optionId": "B",
                "optionText": "ELB Classic Load Balancer in front of the web application tier"
            },
            {
                "optionId": "C",
                "optionText": "Amazon SQS in front of RDS MySQL Database"
            },
            {
                "optionId": "D",
                "optionText": "Amazon ElastiCache in front of the RDS MySQL Database"
            }
        ],
        "questionAnswer": "D"
    },
    {
        "questionId": 5,
        "questionText": "A company is launching an application that it expects to be very popular. The company needs a database that can scale with the rest of the application. The schema will change frequently. The application cannot afford any downtime for database changes.<br>Which AWS service allows the company to achieve these objectives?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon Redshift"
            },
            {
                "optionId": "B",
                "optionText": "Amazon DynamoDB"
            },
            {
                "optionId": "C",
                "optionText": "Amazon RDS MySQL"
            },
            {
                "optionId": "D",
                "optionText": "Amazon Aurora"
            }
        ],
        "questionAnswer": "D"
    },
    {
        "questionId": 6,
        "questionText": "A Solution Architect is designing a disaster recovery solution for a 5 TB Amazon Redshift cluster. The recovery site must be at least 500 miles (805 kilometers) from the live site.<br>How should the Architect meet these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use AWS CloudFormation to deploy the cluster in a second region."
            },
            {
                "optionId": "B",
                "optionText": "Take a snapshot of the cluster and copy it to another Availability Zone."
            },
            {
                "optionId": "C",
                "optionText": "Modify the Redshift cluster to span two regions."
            },
            {
                "optionId": "D",
                "optionText": "Enable cross-region snapshots to a different region."
            }
        ],
        "questionAnswer": "D"
    },
    {
        "questionId": 7,
        "questionText": "A customer has written an application that uses Amazon S3 exclusively as a data store. The application works well until the customer increases the rate at which the application is updating information. The customer now reports that outdated data occasionally appears when the application accesses objects in Amazon S3.<br>What could be the problem, given that the application logic is otherwise",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "The application is reading parts of objects from Amazon S3 using a range header."
            },
            {
                "optionId": "B",
                "optionText": "The application is reading objects from Amazon S3 using parallel object requests."
            },
            {
                "optionId": "C",
                "optionText": "The application is updating records by writing new objects with unique keys."
            },
            {
                "optionId": "D",
                "optionText": "The application is updating records by overwriting existing objects with the same keys."
            }
        ],
        "questionAnswer": "D"
    },
    {
        "questionId": 8,
        "questionText": "A Solutions Architect is designing a new social media application. The application must provide a secure method for uploading profile photos. Each user should be able to upload a profile photo into a shared storage location for one week after their profile is created.<br>Which approach will meet all of these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Use Amazon Kinesis with AWS CloudTrail for auditing the specific times when profile photos are uploaded."
            },
            {
                "optionId": "B",
                "optionText": "Use Amazon EBS volumes with IAM policies restricting user access to specific time periods."
            },
            {
                "optionId": "C",
                "optionText": "Use Amazon S3 with the default private access policy and generate pre-signed URLs each time a new site profile is created."
            },
            {
                "optionId": "D",
                "optionText": "Use Amazon CloudFront with AWS CloudTrail for auditing the specific times when profile photos are uploaded."
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 9,
        "questionText": "An application requires block storage for file updates. The data is 500 GB and must continuously sustain 100 MiB/s of aggregate read/write operations.<br>Which storage option is appropriate for this application?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Amazon S3"
            },
            {
                "optionId": "B",
                "optionText": "Amazon EFS"
            },
            {
                "optionId": "C",
                "optionText": "Amazon EBS"
            },
            {
                "optionId": "D",
                "optionText": "Amazon Glacier"
            }
        ],
        "questionAnswer": "C"
    },
    {
        "questionId": 10,
        "questionText": "A mobile application serves scientific articles from individual files in an Amazon S3 bucket. Articles older than 30 days are rarely read. Articles older than 60 days no longer need to be available through the application, but the application owner would like to keep them for historical purposes.<br>Which cost-effective solution BEST meets these requirements?",
        "questionOptions": [
            {
                "optionId": "A",
                "optionText": "Create a Lambda function to move files older than 30 days to Amazon EBS and move files older than 60 days to Amazon Glacier."
            },
            {
                "optionId": "B",
                "optionText": "Create a Lambda function to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon EBS."
            },
            {
                "optionId": "C",
                "optionText": "Create lifecycle rules to move files older than 30 days to Amazon S3 Standard Infrequent Access and move files older than 60 days to Amazon Glacier."
            },
            {
                "optionId": "D",
                "optionText": "Create lifecycle rules to move files older than 30 days to Amazon Glacier and move files older than 60 days to Amazon S3 Standard Infrequent Access"
            }
        ],
        "questionAnswer": "C"
    }
];


class practiceTest extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }
    connectedCallback() {
        let i = 1;
        questions.forEach(question => {
            var oldDom = this.shadowRoot.innerHTML;
            let questionOptions = '';
            question.questionOptions.forEach(option =>  {
                questionOptions += ('<input id="'+question.questionId+option.optionId+'" name="answer'+question.questionId+'" type="radio" style="float: left;"><label id="'+question.questionId+option.optionId+'label" for="'+question.questionId+option.optionId+'" style="padding-left: 5px;float: left;">'+option.optionId + '. ' +option.optionText+'</label><br> <br>')
            })
            const div = document.createElement('div');
            div.id="tmpDiv";
            div.innerHTML =
                `<template id="practiceTest-template${i}">
                <link href="layout/styles/layout.css" rel="stylesheet" type="text/css" media="all">
                <link href="css/bootstrap.css" rel="stylesheet">
                <link href="css/style.css" rel="stylesheet" type="text/css">
                <div class="row" id="questionContainer${i}" style = "display:none">
                    <div class="col-lg-12" style="min-height: 400px">
                        <h4 class="mb-3"><strong id="questionDescription">1. A Solutions Architect is designing an application that will encrypt all data in an Amazon Redshift cluster.<br>Which action will encrypt the data at rest?</strong></h4>
                        <BR>
                            ${questionOptions}
                    </div>
                    <div class="col-lg-12">
                        <input id="prev${question.questionId}" type="button" value="<" style="float: left;">
                        <input id="next${question.questionId}" type="button" value=">" style="float: left;">
                        <input id="${question.questionId}showAnswer" type="button" value="Verify" style="float: right;" >
                        <strong><label for="${question.questionId}showAnswer" style="float: right;">/${questions.length}&nbsp;</label><label name="score" for="${question.questionId}showAnswer" id="currentScore${question.questionId}" style="float: right;">0</label><label for="${question.questionId}showAnswer" style="float: right;">Score: &nbsp;</label></strong> 
                    </div>
                </div>
            </template>`;
            this.shadowRoot.append(div);
            const template = this.shadowRoot.getElementById(`practiceTest-template${i}`);
            const node = document.importNode(template.content, true);
            node.getElementById('questionDescription').innerHTML = `${question.questionId}. ${question.questionText}`;
            this.shadowRoot.removeChild(div);
            this.shadowRoot.appendChild(node);
            var createValidateButton = function (shadowRoot, currentI, question) {
                return {apply: function () {
                    makeValidateCallback (shadowRoot, currentI, question);
                }
            }}
            var a = createValidateButton(this.shadowRoot, question.questionId, question);
            a.apply();
            i++;
            });
    };
}
customElements.define('practice-test', practiceTest);

function makeValidateCallback (shadowRoot, currentI, question) {
    if (currentI === 1){
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "inline";
        shadowRoot.getElementById(`prev${currentI}`).disabled = true;
    }

    shadowRoot.getElementById(`next${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI+1}`).style.display = "inline";
        shadowRoot.getElementById(`prev${currentI+1}`).disabled = false;
        if (currentI+1 === questions.length){
            shadowRoot.getElementById(`next${currentI+1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`prev${currentI}`).onclick = () => {
        shadowRoot.getElementById(`questionContainer${currentI}`).style.display = "none";
        shadowRoot.getElementById(`questionContainer${currentI-1}`).style.display = "inline";
        shadowRoot.getElementById(`next${currentI-1}`).disabled = false;
        if (currentI-1 === 1){
            shadowRoot.getElementById(`prev${currentI-1}`).disabled = true;
        }
    }

    shadowRoot.getElementById(`${currentI}showAnswer`).onclick = () => {
        shadowRoot.getElementById(`${question.questionId+question.questionAnswer}label`).innerHTML += '&#9989;';
        if (!shadowRoot.getElementById(`${question.questionId+question.questionAnswer}`).checked) {
            var incorrectAns = shadowRoot.querySelector(`input[name=answer${question.questionId}]:checked`);
            if (incorrectAns){
                shadowRoot.getElementById(incorrectAns.id + 'label').innerHTML += '&#10060;';
            }
        } else {
            shadowRoot.querySelectorAll(`label[name=score]`).forEach(e => e.innerHTML = parseInt(e.innerHTML)+1);

        }
        shadowRoot.getElementById(`${currentI}showAnswer`).disabled = true;

    }
}