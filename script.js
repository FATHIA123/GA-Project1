





let someClick = document.querySelectorAll(".click");
let answer = document.querySelectorAll(".click.An");
console.log(answer);



// score 

let score = 0 ;


someClick.forEach(
    function(e, i) {
        e.addEventListener("click", function(){ 
            var An1 = event.target.classList.contains('An') 
            // console.log(An1)
            // console.log(answer)
            if (An1 === true) {
                    alert("correct")
                    score++
                    console.log(score)
                } else {
                        alert("wrong")
                    }
        });   
    }
)

// score

// if click = class "An" pop up correct 

// incriment score value 

// else console log wrong 

// reset 

function reset () {
score = 0; 


}



// setTimeout(function(){ 
    
//     alert("Hello"); }

// ,6000);

////////////

// let Questions = [
// {
//     question: "how many apples are there?",
//     answer: ["1", "2", "3", "4" ],
//     correctAnswer: "1"
// },
// {
//     question: "what's your name?",
//     answer: ["a", "b", "c", "d" ],
//     correctAnswer: "a"
// }

// ]

// console.log (Questions)
// get buttons from the html 

// change the question in HTML 




// var optionList2 = document.getElementsByClassName("")
// let optionList1 = document.querySelectorAll('.O1')
// console.log(optionList1)

// for ( i=0; i< Questions.length; i ++) {
//     const selector = `Q${i+1}`
//     let Qes = document.getElementById(selector)
//     var changed =  Qes.innerHTML = Questions[i].question
//     // console.log(Qes )
//     // console.log(changed)
    
//     // console.log(Questions[i].answer)
//     // do another loop for answers
    
 

// }

// for ( i=0; i< optionList1.length; i ++) {

//     var currentButton = optionList1[i]
//     console.log(currentButton)

//      for (j=0 ; j < )

//     // const selector = `Q${i+1}`
//     // let Qes = document.getElementById(selector)
//     // var changed =  Qes.innerHTML = optionList1[i].question
//     // console.log(Qes )
//     // console.log(changed)
    
//     // console.log(Questions[i].answer)
//     // do another loop for answers
    
 
    
// }











// for (let j = 0; j < Questions[i].answer.length; j++) {
        
//     const selectorA = `O${j+1}`
//     var optionList2 = document.getElementsByClassName("O2")[j]
    
    
//     console.log(Questions[j].answer )
    
    
//     // console.log()
//     // let Op =/
//     // console.log(Questions[i].answer[j]) 
//     // do innerhtml here
//     // console.log(optionList)
    
//     }
    
//     var optionList1 = document.getElementsByClassName("O1")
    
//     console.log(optionList1)
    
    
//     optionList1.forEach( (i, j) => { 
//         var changeAns = optionList.innerHTML = Questions[i].answer[j]
//     console.log(changeAns)
// });




