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
