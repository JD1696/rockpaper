




function gtest(){
     alert("test")
}






document.addEventListener("DOMContentLoaded", function(event) {
     // Your code to run since DOM is loaded and ready
  


     


function computerPlay(){
    let result = Math.floor(Math.random() * 3) + 1;
    if (result == 1){
         rresult = "Rock";
    }
    else if(result == 2){
         rresult = "Paper";
    }
    else if (result == 3){
         rresult = "Scissors";
    }
    
    
}

function enemyResult(){
     if (rresult === "Rock"){
          emmeny.innerText = "Rock";
     }
     else if (rresult === "Paper"){
          emmeny.innerText = "Paper";
     }
     else if (rresult === "Scissors"){
          emmeny.innerText = "Scissors";
     }
}


let count =0;

let playerScore = 0;
let compScore = 0;

function countGoup(){
     count++;
}




function compareFunction(){
     
    
     
     
    
     function checker(){
         
          function score1(){
               console.log("score");
               if (playerScore > compScore){
                   txtbocks.innerText = "Winner!"
                   winaudio.play(); 
               }
               else if(compScore > playerScore){
                    txtbocks.innerText = "Loser!"
                    loseraudio.play();
               }
               else if(compScore === playerScore){
                    txtbocks.innerText = "Tie Game!"
               }
     
               
          }







          if (count === 5){
              
               score1()
          }
     }
    
    
     
     
     
     
     
     checker();
     
     
     
   
     if (playerInput == "rock" && rresult == "Scissors" || 
         playerInput == "paper" && rresult =="Rock"||
         playerInput == "scissors" && rresult =="Paper"){
              console.log("player round");
          
          playerScore++;
     }
     else if (playerInput =="rock" && rresult =="Rock" ||
              playerInput =="paper" && rresult == "Paper" ||
              playerInput =="scissors" && rresult == "Scissors"){
               console.log("draw round");
    
     }
     else if (playerInput=="rock" && rresult =="Paper"||
              playerInput=="paper" && rresult =="Scissors"||
              playerInput=="scissors" && rresult =="Rock"){
               console.log("computer round");
               compScore++;
              };
              
}
   
// sound effects
const paperaudio = new Audio("paper.wav");
const rockaudio = new Audio("rock.wav");
const scissoraudio = new Audio("scissors.wav")
const winaudio = new Audio("cheer.wav")
const loseraudio = new Audio("loser.wav")


const btn1 = document.querySelector("#b1")
const btn2 = document.querySelector("#b2")
const btn3 = document.querySelector("#b3")
const txtbocks = document.querySelector("#textboxt")
const playbtn = document.querySelector("#playbutton")


const emmeny = document.querySelector("#enemyOption")
const frenly = document.querySelector("#playerOption")



function gtest(){
     emmeny.innerText = "Woot!"
     frenly.innerText = "Poot!"
}




btn1.addEventListener('click', () => {
     playerInput = "rock" 
     rockaudio.play()
     frenly.innerText = "rock"

});

btn2.addEventListener('click', () => {
     playerInput = "paper"
     paperaudio.play()
     frenly.innerText = "paper"
});

btn3.addEventListener('click', () => {
     playerInput = "scissors"
     scissoraudio.play()
     frenly.innerText = "Scissors"
});

playbtn.addEventListener("click", () => {
     
     countGoup()
     computerPlay()
     compareFunction()
     enemyResult()
});


















// playbtn.addEventListener("click", () =>{
//         count++; 
//         checker() 
// });











});


















