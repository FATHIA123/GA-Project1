





let someClick = document.querySelectorAll(".click");
let answer = document.querySelectorAll(".click.An");
console.log(answer);



// score 

let score = 0 ;


someClick.forEach(
    function(e, i) {
        e.addEventListener("click", function(){ 
            let An1 = event.target.classList.contains('An') 
            // console.log(An1)
            // console.log(answer)
            if (An1 === true) {
                    alert("correct")
                    score = score+1

var J = document.getElementById("score1")
J.innerHTML = score + "/" + 7

                } else {
                    alert("wrong")
                }
                console.log(score)
            });   
        }
        )
        
// score




// reset 

// add event listener to the reset button 

 var R = document.getElementById("resetButton")

R.addEventListener("click", function () {reset();} )
function reset () {
     score = 0 ;

}



setTimeout(function(){ 
    // reset();
    alert("time up"); }

,12000);


// modal

// Get DOM Elements
const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('#modal-btn');
const closeBtn = document.querySelector('.close');

// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}


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




