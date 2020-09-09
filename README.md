# DEVSPOT-landing
Migrate a new test
Regext to process:

1) Get the questions which you have answers from examtopics pages by downloading to disk each one without showing the answer and copy to a single txt file.
1) 
  a) replace all " for ' 
  b) and remove all <br> (issues with pdfjs)
2) start scrapping by replacing you can use some regex like this for the footer has (\d+ \w+) for regex any char or any digit


							    </li>

						    </ul>
						</div>


					    <a href="https://www.examtopics.com/exams/amazon/aws-certified-developer-associate/view/\d+/#" class="btn btn-primary reveal-solution d-print-none">Reveal Solution</a>
					    <a href="https://www.examtopics.com/exams/amazon/aws-certified-developer-associate/view/\d+/#" class="btn btn-primary hide-solution d-none d-print-none">Hide Solution</a>

						<a href="https://www.examtopics.com/exams/amazon/aws-certified-developer-associate/view/\d+/#" class="btn btn-secondary question-discussion-button d-print-none">
						    <i class="fa fa-comment"></i>
						    &nbsp; Discussion &nbsp;

							<span class="badge badge-pill badge-light">\d+</span>


						</a>


					    <p class="card-text question-answer bg-light white-text">
						<span class="correct-answer-box"><strong>Correct Answer:</strong>
						    <span class="correct-answer">\w+</span> <br></span>
						<span class="answer-description">

						</span>
					    </p>



					</div>
				    </div>
				    <!-- / Question  -->





				    <!-- Question -->



					12) Replace empty values in notepad++ toolbucket multiline replace
					13) format it in postman
					14) copy the answers file to excel, use the formula to convert to an appropiate json object by assingning an id and the respective question answer and explanation if available, validate json dont forget the examid for dynamo db
					15) put only the questions that are mapped correctly to your answers file
					16) paste both arrays in mergeQ&A.js
					17) create the new html file import and on the onload set this
					<script src="components/practiceTest/AWS/mergeQ&A.js"></script>
</head>

change the examid to the exam being migrated
<body onload="mergeQaA();">

18)Save it as DVA-C01Sk

19)inspect teh var exportThisToDynamo and paste it in postexam lambda


20)Change the exam table to reflect the new number of questions
