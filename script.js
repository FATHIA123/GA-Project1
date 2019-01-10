

var Questions = [
{
    question: "how many apples are there?",
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


var optionList1 = document.getElementsByClassName("A")


for (let i=0; i< Questions.length; i ++) {
    const selector = `Q${i+1}`
    let Qes = document.getElementById(selector)
    var changed =  Qes.innerHTML = Questions[i].question
    // console.log(Qes )
    // console.log(changed)

    // console.log(Questions[i].answer)
    // do another loop for answers

    for (let j = 0; j < Questions[i].answer.length; j++) {

        // let Op =/
        // console.log(Questions[i].answer[j]) 
        // do innerhtml here
        console.log(optionList1[j])

    }
}


// if (Qes.innerHTML === nullv) {
//     Qes.innerHTML = Questions[0].question.value;
//   } else {
//     Qes.innerHTML =Questions[0].question.value ;
//   }




var optionList2 = document.getElementsByClassName("B")




// get the arraay from the objects 
for (i=0; i<Questions.length; i++) {
var answerArrary = Questions[i].answer
// optionList1.innerHTML = answerArrary
console.log(answerArrary)
}



