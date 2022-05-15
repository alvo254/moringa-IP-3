var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.move');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;


var questionier = [
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

function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionier[i].question;
    option0.innerHTML= questionier[i].option[0];
    option1.innerHTML= questionier[i].option[1];
    option2.innerHTML= questionier[i].option[2];
    option3.innerHTML= questionier[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionier.length;
}

function calculateScore(e){
    if(e.innerHTML===questionier[i].answer && score<questionier.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'red';
    }
    else{
        document.getElementById(e.id).style.background= 'tomato';
    }
    setTimeout(nextQuestion,300);
}
function nextQuestion(){
    if(i<questionier.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionier.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }
}

next.addEventListener('click',nextQuestion);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionier.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionier[a].answer;
        answers.appendChild(list);
    }
}

// function retMessage{
//         var result = document.getElementById('returnVal')
//     result.textContent = `${c}`
//     if (c <= 3){
//         result.textContent = "You failed ${c} lkajfd"
//     }else{
//         result.textContent = "you passed $c"
//     }

// }


displayQuestion();