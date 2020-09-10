# DEVSPOT-landing
Migrate a new test
Regext to process:

1) Get the questions which you have answers from examtopics pages by downloading to disk each one without showing the answer and copy to a single txt file.
1) 
  a) replace all " for ' 
  b) and remove all \<br\> (issues with pdfjs)
2) start scrapping by replacing you can use some regex like this for the footer has (\d+ \w+ .{1,}) for regex any char or any digit


							    
                                                    </li>
                                                
                                            </ul>
                                        </div>
                                    

                                    <a href='https://www.examtopics.com/exams/amazon/aws-sysops/view/\d+/#' class='btn btn-primary reveal-solution d-print-none'>Reveal Solution</a>
                                    <a href='https://www.examtopics.com/exams/amazon/aws-sysops/view/\d+/#' class='btn btn-primary hide-solution d-none d-print-none'>Hide Solution</a>
                                    
                                        <a href='https://www.examtopics.com/exams/amazon/aws-sysops/view/\d+/#' class='btn btn-secondary question-discussion-button d-print-none'>
                                            <i class='fa fa-comment'></i>
                                            &nbsp; Discussion &nbsp;
                                            
                                                <span class='badge badge-pill badge-light'>\d</span>
                                            

                                        </a>
                                    

                                    <p class='card-text question-answer bg-light white-text'>
                                        <span class='correct-answer-box'><strong>Correct Answer:</strong>
                                            <span class='correct-answer'>D</span> </span>
                                        <span class='answer-description'>
                                            .{1,}
                                        </span>
                                    </p>

                                    

                                </div>
                            </div>
					12) Replace empty values in notepad++ toolbucket multiline replace
					13) format it in postman
					14) copy the answers file to excel, use the formula to convert to an appropiate json object by assingning an id and the respective question answer and explanation if available, validate json dont forget the examid for dynamo db
					15) put only the questions that are mapped correctly to your answers file in order questionid of questions same as questionid from answers.
					16) paste both arrays in mergeQ&A.js
					17) create the new html file import and on the onload set this
					<script src="components/practiceTest/AWS/mergeQ&A.js"></script>
</head>
Final product must be 

	[
	    {
		"questionId": 114,
		"questionText": "While developing an application that runs on Amazon EC2 in an Amazon VPC, a Developer identifies the need for centralized storage of application-level logs. Which AWS service can be used to securely store these logs?",
		"questionOptions": [
		    {
			"optionId": "A",
			"optionText": "Amazon EC2 VPC Flow Logs "
		    },
		    {
			"optionId": "B",
			"optionText": "Amazon CloudWatch Logs"
		    },
		    {
			"optionId": "C",
			"optionText": "Amazon CloudSearch"
		    },
		    {
			"optionId": "D",
			"optionText": "AWS CloudTrail"
		    }
		],
		"questionAnswer": "B",
		"examId": "DVA-C01",
		"questionSkId": 113
	    },
	    {
		"questionId": 115,
		"questionText": " A stock market monitoring application uses Amazon Kinesis for data ingestion. During simulated tests of peak data rates, the Kinesis stream cannot keep up with the incoming data. What step will allow Kinesis to accommodate the traffic during peak hours?",
		"questionOptions": [
		    {
			"optionId": "A",
			"optionText": "Install the Kinesis Producer Library (KPL) for ingesting data into the stream. "
		    },
		    {
			"optionId": "B",
			"optionText": "Reduce the data retention period to allow for more data ingestion using DecreaseStreamRetentionPeriod."
		    },
		    {
			"optionId": "C",
			"optionText": "Increase the shard count of the stream using UpdateShardCount."
		    },
		    {
			"optionId": "D",
			"optionText": "Ingest multiple records into the stream in a single call using PutRecords."
		    }
		],
		"questionAnswer": "C",
		"examId": "DVA-C01",
		"questionSkId": 114
	    }
	];

change the examid to the exam being migrated
<body onload="mergeQaA();">

18)Save it as DVA-C01Sk

19)inspect teh var exportThisToDynamo and paste it in postexam lambda


20)Change the exam table to reflect the new number of questions
