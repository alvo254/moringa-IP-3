var questionBank= [
    {
        question : 'Whic of the following is a prgramming language',
        option : ['Django','Python','CSS','XML'],
        answer : 'Python'
    },
    {
        question : 'In rust programming language how many ownership rules do we have?.',
        option : ['As many as we want','1','3',],
        answer : '3'
    },
    {
        question : 'How do we use inherit in python?.',
        option : ['Superclass(superset)','classA.inherit()','inherit(class)','All of the above'],
        answer : 'Superclass(superset)'
    },
    {
        question : 'What is HTML in full?.',
        option : ['Cascading sheet','hypertext transfer protocal','all the above','hypertext markup language'],
        answer : 'Hypertext markup language'
    },
    {
        question : 'Which of the following can be used as a scripting languages',
        option : ['C++','python','rust','html'],
        answer : 'python'
    }
]

var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;