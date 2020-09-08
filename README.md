# DEVSPOT-landing
Migrate a new test
Regext to process:

1) Remove the Id something like 3A52A51D4DDEDF2CE379291908AA5BBD replace empty
2) add a [ at the beggining and at the end ]
3)Go to:
https://regex101.com/ 
click substitution
4) paste the raw pdf text
5) replace this regex `QUESTION (\d+)(\n)` with `"}]},{"questionId": \1,\2"questionText":"`
6) copy the output to notepad ++ use reg exp
`\nA\. `

for

 `","questionOptions": [
                {
                    "optionId": "A",
                    "optionText": "`
7) use reg exp
`\nB\. `

for

`"},{
                    "optionId": "B",
                    "optionText": "`
8) do  use reg exp
`\nC\. `

for

`"},{
                    "optionId": "C",
                    "optionText": "`
9) do  use reg exp
`\nD\. `

for

`"},{
                    "optionId": "D",
                    "optionText": "`
					
					9) do  use reg exp
`\nE\. `

for

`"},{
                    "optionId": "E",
                    "optionText": "`
					9) do  use reg exp
`\nF\. `

for

`"},{
                    "optionId": "F",
                    "optionText": "`
					
					10)
					`\r","`
					for
					`","`
					11)
					`\r"},{`
					for
					`"},{`
					
					12) 
					`\r\n"}]},{`
					for 
					`"}]},{`  twice
					12) Replace empty values in notepad++ toolbucket multiline replace
					13) format it in postman
					14) copy the answers file to excel, use the formula to convert to an appropiate json object by assingning an id and the respective question answer and explanation if available
					15) put only the questions that are mapped correctly to your answers file
					16) paste both arrays in mergeQ&A.js
					17) create the new html file import and on the onload set this
					<script src="components/practiceTest/AWS/mergeQ&A.js"></script>
</head>

change the examid to the exam being migrated
<body onload="mergeQaA();">

add columns using the other function enumerateQs()

Save it as DVA-C01Sk

then check if valid json https://jsonlint.com/


replace `’` for `'`
replace `“` for `'`
replace `”` for `'`

		import minify to 1 line and pste at the end of postQuestion lambda

		Must be in this format:

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
