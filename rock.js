

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
    console.log(rresult);
    return rresult;

}


function compareFunction(){
     if (playerInput == "rock" && rresult == "Scissors" || 
         playerInput == "paper" && rresult =="Rock"||
         playerInput == "scissors" && rresult =="Paper"){
     
          txtbocks.innerText = "winner"
     }
     else if (playerInput =="rock" && rresult =="Rock" ||
              playerInput =="paper" && rresult == "Paper" ||
              playerInput =="scissors" && rresult == "Scissors"){
               txtbocks.innerText = "Tie"
    
     }
     else if (playerInput=="rock" && rresult =="Paper"||
              playerInput=="paper" && rresult =="Scissors"||
              playerInput=="scissors" && rresult =="Rock"){
               txtbocks.innerText = "LOSSER"
              }
}
   

const paperaudio = new Audio("paper.wav");
const rockaudio = new Audio("rock.wav");
const scissoraudio = new Audio("scissors.wav")

//    function playAudio(url) {
//      new Audio(url).play();
//    }
  



const btn1 = document.querySelector("#b1")

const btn2 = document.querySelector("#b2")

const btn3 = document.querySelector("#b3")
const txtbocks = document.querySelector("#textboxt")






btn1.addEventListener('click', () => {
     playerInput = "rock"
     computerPlay()
     compareFunction()
     rockaudio.play()
});


btn2.addEventListener('click', () => {
     playerInput = "paper"
     computerPlay()
     compareFunction()
     paperaudio.play()
});

btn3.addEventListener('click', () => {
     playerInput = "scissors"
     computerPlay()
     compareFunction()
     scissoraudio.play()
});




});


















