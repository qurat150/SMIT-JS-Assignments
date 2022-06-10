// var quizData = [{
//     question: "How Old is Qurat",
//     options: ["20", "17", "15", "110"],
//     correct: "17"
// }, {
//     question: "What does HTML stands For?",
//     options: ["HyperText Markup Language", "Hyperlink Makeup Language", "Cascading Style Sheet", "HyperMake Making Language"],
//     correct: "HyperText Markup Language"
// }, {
//     question: `What is the best Programming Language learn in "2022"`,
//     options: ["JavaScript", "C++", "Python", "Java"],
//     correct: "JavaScript"
// }, {
//     question: "Who is the best girl in the World",
//     options: ["Qurat ul Ain", "Fiza", "Rubab", "Nazish"],
//     correct: "Qurat ul Ain"
// }]
// var i = 0;
// var score = 0;
// var isCompleted = false
// function loadQuestions(e, notFirst) {
//     if ((i + 1) === quizData.length && notFirst) {
//         e.target.innerHTML = "Ok"
//         isCompleted = true
//     }
//     if (isCompleted) {
//         alert(`you've got ${score} out of 4 ${quizData.length}`)
//     } else {
//         document.getElementById("question").innerHTML = quizData[i].question;
//         var answers = document.querySelectorAll(".answers")
//         answers.forEach((element, x) => element.innerHTML = quizData[i].options[x]);
//         notFirst && i++
//     }
// }
// function onChange(e) {
//     const checkedAns = e.target.querySelector(`#${e.target.id}~ label`).innerHTML
//     if (checkedAns === quizData[i].correct) {
//         score++
//     }
// }
