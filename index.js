let computerGuess;
let userGuess=[];

const init=()=>{
    computerGuess=Math.floor(Math.random()*100);
    document.getElementById("newGamebutton").style.display="none";
    document.getElementById("gameArea").style.display="none";
    
}
const startGame=()=>{
    document.getElementById("gameArea").style.display="block"
    document.getElementById("welcome").style.display="none"

}
const startNewGame=()=>{
    document.getElementById("newGamebutton").style.display="inline"
    document.getElementById("inputBox").setAttribute("disabled",true)

}
const restartGame=()=>{
   window.location.reload()

}
const compareGuess=()=>{
    const userNumber=Number(document.getElementById("inputBox").value)
    userGuess=[...userGuess,userNumber]
    document.getElementById("guesses").innerHTML=userGuess

    if(userGuess.length<maxGuess){

    if(computerGuess>userNumber){
        document.getElementById("textOutput").innerHTML="Your Guess is Low"
        document.getElementById("inputBox").value=" "
    }
    else if(computerGuess<userNumber){
        document.getElementById("textOutput").innerHTML="Your Guess is high"
        document.getElementById("inputBox").value=" "
    }
    else{
        document.getElementById("textOutput").innerHTML="Your Guess is correct"
        startNewGame();

    }
}else if(userGuess.length==maxGuess&&computerGuess==userNumber){
    document.getElementById("textOutput").innerHTML="Your Guess is correct"

}

else{
    document.getElementById("textOutput").innerHTML=`You loss correct answer is ${computerGuess}`
        document.getElementById("inputBox").value=" "
        startNewGame();

}
    document.getElementById("attempts").innerHTML=userGuess.length



}   

const easyMode=()=>{
    maxGuess=10;
    startGame()
}
const hardMode=()=>{
    maxGuess=5;
    startGame()
}

