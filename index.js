const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b:  '17',
        c:  '26',
        d:  '110',
        correct: 'c'
    }, {
        question: 'what is the most used programming language in 2019?',
        a: 'java',
        b: 'c',
        c: 'phython',
        d: 'javascript',
        correct: 'd'
    },{
        question: 'who is he president of us?',
        a: 'florin pop',
        b: 'Donald Trump',
        c: 'Ivan',
        d: 'Mihal',
        correct: 'b'
    },{
        question:'what does html stands for?',
        a: 'hypertext Markup Language',
        b: 'Cascading stylesheet',
        c: 'jasson object Notation',
        d: 'Halicopter terminals motorboats lambogiri',
        correct: 'a'
    }, {
        question: 'what year was javascript launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none',
        correct: 'd'
    }
];
const quiz = document.getElementById("quiz");
const answerE1s = document.querySelectorAll(".answer");

const questionE1 = document.getElementById("question");



const a_text =document.getElementById("a_text");
const b_text =document.getElementById("b_text");
const c_text =document.getElementById("c_text");
const d_text =document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
 
let currentQuiz = 0;
 let score=0;

loadQuiz();
function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionE1.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;


    
}


function getSelected() {
    
    let answer =undefined;
    answerE1s.forEach((answerE1) => {
         if(answerE1.checked){
              answer = answerE1.id;
         }
    });

    return answer;

}
function deselectAnswers(){
    answerE1s.forEach((answerE1) => {
         answerE1.checked = false;
    
        
    
});

}
 
submitBtn.addEventListener("click",() => {
    const answer = getSelected();
    

    
     if(answer ){
       if(answer === quizData[currentQuiz].correct){
         score++;
        }
        currentQuiz++;
     //     if(currentQuiz < quizData.length){
                
      //      loadQuiz();
       //    } else {
         // quiz.innerHTML = 
         // <h2>you answered correctly at ${score}/ ${quizData.length} questions.</h2>
                
               // <button onclick = "location.reload()">Reload</button> 
                ;
                
       //     }


   
      //  }

    
    
   
   

   

    

    
});
