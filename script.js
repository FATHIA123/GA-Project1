

var Questions = [
{
    question: "how old are you?",
    answer: ["1", "2", "3", "4" ],
    correctAnswer: "1"
},
{
    question: "what's your name?",
    answer: ["a", "b", "c", "d" ],
    correctAnswer: "a"
}

]

console.log (Questions)
// get buttons from the html 

// change the question in HTML 
let Qes = document.getElementsByClassName('btn').innerText
console.log(Qes) 

// if (Qes.innerHTML === nullv) {
//     Qes.innerHTML = Questions[0].question.value;
//   } else {
//     Qes.innerHTML =Questions[0].question.value ;
//   }



Qes = Questions[0].question.value 

var optionList1 = document.getElementsByClassName("A")
var optionList2 = document.getElementsByClassName("B")


console.log(optionList1)

// get the arraay from the objects 
for (i=0; i<Questions.length; i++) {
var answerArrary = Questions[i].answer
// optionList1.innerHTML = answerArrary
console.log(answerArrary)
}

// for (i=0; i < answerArrary.length; i++) {
//     optionList1.push(answerArrary[i]);
//     answerArrary.splice(i, 1)
//     i--
// }

// console.log(answerArrary)

