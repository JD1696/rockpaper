

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
          winaudio.play();
          txtbocks.innerText = "You Win!"
     }
     else if (playerInput =="rock" && rresult =="Rock" ||
              playerInput =="paper" && rresult == "Paper" ||
              playerInput =="scissors" && rresult == "Scissors"){
               txtbocks.innerText = "Tie Game!"
    
     }
     else if (playerInput=="rock" && rresult =="Paper"||
              playerInput=="paper" && rresult =="Scissors"||
              playerInput=="scissors" && rresult =="Rock"){
               txtbocks.innerText = "You Lose!"
              }
}
   

const paperaudio = new Audio("paper.wav");
const rockaudio = new Audio("rock.wav");
const scissoraudio = new Audio("scissors.wav")
const winaudio = new Audio("cheer.wav")

//    function playAudio(url) {
//      new Audio(url).play();
//    }
  



const btn1 = document.querySelector("#b1")

const btn2 = document.querySelector("#b2")

const btn3 = document.querySelector("#b3")
const txtbocks = document.querySelector("#textboxt")

const playbtn = document.querySelector("#playbutton")




btn1.addEventListener('click', () => {
     playerInput = "rock" 
     rockaudio.play()
});


btn2.addEventListener('click', () => {
     playerInput = "paper"
     paperaudio.play()
});

btn3.addEventListener('click', () => {
     playerInput = "scissors"
     scissoraudio.play()
});



playbtn.addEventListener("click", () => {
     computerPlay()
     compareFunction()
});














});


















