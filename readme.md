


# Desription 

 - This is a triva game solving the complicated questions. 
 - This game challenges your knowlege on the show series "the Simpsons". If you play you will have a more indepth understanding of the Simpsons show.

 # Breif Examples 

 - To play this game, you simply just have to pick what you assume to be the best answer. The game tells you whether you are right or wrong. Then the game keeps score of the amount of questions you have right. You can check your score by clicking on the "Score" button on the bottom half of the game. 

```html 
<div class="card">
                <div class="card-header" id="headingOne">
                    <h5 class="mb-0">
                    <button class="btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                        <span id="Q1"> Who founded Springfield?</span>
                    </button>
                    </h5>
                </div>

                <div id="collapseOne" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                    <div class="card-body">
                            <button class="click O1"> Hans Springfield</button>
                            <button class="click An"> Jebediah Springfield </button>
                            <button class="click O1"> Shelbyville Manhattan</button>
                            <button class="click O1"> Abraham Simpson</button>
                    </div>
                </div>
                </div>
```        
        
 

- the above code is the one entire card. The card is used to store the question and the answer. The questions and the answers are written directly onto the html card. Bootstrap is used to create this card. 


```script    

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


```

this JS fucntion is the for loop that listens for the click, matchs the class name that has the answer. If the player clicks on the button with the specific class then it incriments the score, tells the player they are right, and updates the score on the modal. 






 # List of Technologies used 

 - This game uses basic HTML, CSS, and vanilla JavaScript. Bootstrap framework is also applied to this game. Bootstrap accordion is used to setup the cards where the questions are asked and answered. HTML is used to layout the basic structure. the questions in this game is manually written in the HTML. The DOM was attempted to be used to set up the questions/ answers / correct answer, however, there was a set of difficulties encountered in which the coder wasn't able to solve. Therefore, the coder resolved to using maual entry of the questions and options. CSS is used to style the page, including the modal, and also add hover effects. 
 - Setting the score, reseting the score, the "time out" pop-up, and modal functionalities is all written using JS. 

 # Installation Instructions / Getting Started

 - Fork this repo & clone onto the your homw computer. 
 - Make locaol changes 
 - Push and make a pull request 

 # Contribution Guidlines

  - Some things that will improve this code is as follows: 
      - Having a next button: when a player is playing a game and answers one question, there should be a pop-up where the player is able to smootly transition to the next question. 
      - In the pop-up, the player should be able to see not only their scores but a discription of the answer.
      - On the page somewhere there should be something that shows the player their score as they play.
      - After the player answers a question, the pop-up shows up with the right answer, and the player hits next, the player shouldn't be able to click on the previous question. The bootsctrap cards should stay collaped until the reset button is clicked. 
      - Instead of manually inputting the questions/answers/correct answers in the html, it would be great to use the DOM. This is to have as many questions and options as needed. I attempted to use the DOM. Got it to add te questoins into the html, but since the answers were in an array of objects within an array, it was diffuclt tring to create a triple nested loop to add those multiple choice options into the html in correct order. 
      - Finally add a timer and @media function.