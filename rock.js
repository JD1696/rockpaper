





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
     
          alert("winner!");
     }
     else if (playerInput =="rock" && rresult =="Rock" ||
              playerInput =="paper" && rresult == "Paper" ||
              playerInput =="scissors" && rresult == "Scissors"){
          alert("Tie");
    
     }
     else if (playerInput=="rock" && rresult =="Paper"||
              playerInput=="paper" && rresult =="Scissors"||
              playerInput=="scissors" && rresult =="Rock"){
                   alert("Loster!")
              }
}
   





  

function clickEvent1(){
     playerInput = "rock";
     console.log(playerInput);
     computerPlay();
     compareFunction()

}
         
function clickEvent2(){
     playerInput = "paper";
     console.log(playerInput);
     computerPlay();
     compareFunction()

}

function clickEvent3(){
     playerInput = "scissors";
     console.log(playerInput);
     computerPlay();
     compareFunction()

}












































