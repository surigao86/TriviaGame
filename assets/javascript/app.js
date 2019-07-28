$(document).ready(function(){
    var worldSeries = "";
    

    $("input[name='world-series']").on("click",function(){
        // console.log($(this).val());
        worldSeries = $(this).val();

        // console.log(worldSeries);
    });


    $("button").on("click",function(){
        // console.log("submitted");

        if (worldSeries == "Texas Rangers"){
            console.log("You Win!")
            
        }else{
            console.log("You lose!")
        }
    });


// $(document).ready(function(){
//     const quizContainer = document.getElementById(`quiz`);
//     const resultContainer = document.getElementById('results');
//     const submitButton = document.getElementById('submit');

    
    
//     function showResults(){

//     }
    

//     submitButton.addEventListener('click', showResults());

//     const myQuestions = [
//         {
//             question: "Who did the SF Giants beat in the 2010 World Series?",
//             answers: {
//                 a: "Texas Rangers",
//                 b: "La Dodgers",
//                 c: "NY Yankees",
//                 d: "Boston Red Sox"
//             },
//             correctAnswer: "a"
//         },
//         {
//             question : "Who was the starting pitcher for the SF giants on final World Series game?",
//             answers: {
//                 a: "Matt Cain",
//                 b: "Tim Lincecum",
//                 c: "Jonathan Sanchez",
//                 d: "Madison Bumgarner"
//             },
//             correctAnswer: "b"
//         },
//         {
//             question: "What was the SF Giants Final score for the winning game?",
//             answers: {
//                 a: "3",
//                 b: "9",
//                 c: "4",
//                 d: "7"
//             },
//             correctAnswer: "c"
//         },
//         {
//             question: "Who won the World Series MVP?",
//             answers: {
//                 a: "Buster Posey",
//                 b: "Andres Torres",
//                 c: "Edgar Renteria",
//                 d: "Cody Ross"
//             },
//             correctAnswer: "c"
//         },
//     ];


//     function buildQuiz(){
//         const output = [];

//         myQuestions.forEach(
//             (currentQuestion, questionNumber) => {
//                 const answers = [];
//                 for(letter in currentQuestion.answers){
//                     answers.push(
//                         `<label>
//                         <input type="radio" name="question${questionNumber}" value="${letter}">
//                         ${letter} :
//                         ${currentQuestion.answers[letter]}
//                         </label>` 
//                     );
//                 }

//                 console.log(answers);

//                 output.push(
//                     `<div class="question"> ${currentQuestion.question} </div>
//                     <div class="answers"> ${answers.join("")} </div>`
//                 );
//             }
//         );
//         quizContainer.innerHTML = output.join("");
//     }

//     buildQuiz();
