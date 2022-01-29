





document.addEventListener("DOMContentLoaded", function(event) {
     // Your code to run since DOM is loaded and ready
  


     // if r,p,s is pressed, value = 1, if value=1 playbtn= true//





let pressedorNot = 0;





function computerPlay(){
    let result = Math.floor(Math.random() * 3) + 1;
    if (result == 1){
         rresult = "Rock";
         rockaudio.play();
    }
    else if(result == 2){
         rresult = "Paper";
         paperaudio.play()
    }
    else if (result == 3){
         rresult = "Scissors";
         scissoraudio.play()
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

// if playerscore changes, then change psReadout     after turn, fetch playerscore, convert



function scoreRead(){
     psReadout.innerText = "Player: " + playerScore.toString();
     cmReadout.innerText = "Computer: " + compScore.toString();
     roundReadout.innerText = "Round: " + count.toString();
     tally01.innerText = "Player: " + tally1.toString();
     tally02.innerText = "Computer: " + tally2.toString();
    
}

function lock(){
     if (count === 5){
          playbtn.disabled = true;
          btn1.disabled = true;
          btn2.disabled = true;
          btn3.disabled = true;
     }
     else {
          playbtn.disabled = false;
          btn1.disabled = false;
          btn2.disabled = false;
          btn3.disabled = false;
     }
}




function reset(){
     count = 0;
     playerScore = 0;
     compScore = 0;
     txtbocks.innerText = "";
     frenly.innerText = "";
     emmeny.innerText = "";
     lock();
     scoreRead();
}





function countGoup(){
     count++;
}


let tally1 = 0;
let tally2 = 0;


function tallyCheck(){

}





function compareFunction(){
     
    
     
     
    
      function checker(){
         
          function score1(){
               console.log("score");
               if (playerScore > compScore){
                    txtbocks.innerText = "Winner!"
                   winaudio.play();
                   tally1++; 
               }
               else if(compScore > playerScore){
                     txtbocks.innerText = "Loser!"
                    loseraudio.play();
                    tally2++;
               }
               else if(compScore === playerScore){
                     txtbocks.innerText = "Tie Game!"
               }
                    
          }


          if (count === 5){
              
               score1()
          }
     } 
    

      
     
        
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
      
              checker();
              scoreRead()

      lock()
              
}
   
// sound effects
const paperaudio = new Audio("paper.wav");
const rockaudio = new Audio("rock.wav");
const scissoraudio = new Audio("scissors.wav")
const winaudio = new Audio("cheer.wav")
const loseraudio = new Audio("loser.wav")
//

// Buttons
const btn1 = document.querySelector("#b1")
const btn2 = document.querySelector("#b2")
const btn3 = document.querySelector("#b3")
const txtbocks = document.querySelector("#textboxt")
const playbtn = document.querySelector("#playbutton")
const resetbtn = document.querySelector("#resetbutton")
//

// output 
const emmeny = document.querySelector("#enemyOption")
const frenly = document.querySelector("#playerOption")
const psReadout = document.querySelector("#pRead")
const cmReadout = document.querySelector("#compRead")
const roundReadout = document.querySelector("#rRead")
const tally01 = document.querySelector("#tally1")
const tally02 = document.querySelector("#tally2")










function prezzed(){



     if(pressedorNot < 1){
          playbtn.disabled = true;
     }
     else{
          playbtn.disabled = false;
     }
     
}







prezzed();




btn1.addEventListener('click', () => {
     playerInput = "rock" 
     rockaudio.play()
     frenly.innerText = "rock"
     pressedorNot = 1;
     prezzed()

});

btn2.addEventListener('click', () => {
     playerInput = "paper"
     paperaudio.play()
     frenly.innerText = "paper"
     pressedorNot = 1;
     prezzed()
});

btn3.addEventListener('click', () => {
     playerInput = "scissors"
     scissoraudio.play()
     frenly.innerText = "Scissors"
     pressedorNot = 1;
     prezzed()
});

playbtn.addEventListener("click", () => {
     
     countGoup()
     computerPlay()
     compareFunction()
     enemyResult()
     playbtn.disabled = true;
     
});

resetbtn.addEventListener("click",() =>{
     reset();
});








//end

});


















