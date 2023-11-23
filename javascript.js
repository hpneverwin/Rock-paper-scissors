function getComputerChoice(){
    const options = ["rock","paper","scissors"];
    let choice = options[Math.floor(Math.random()*3)];
    return choice;
}

function playRound(playerSelection,computerSelection){
    if (playerSelection.toLowerCase() == computerSelection.toLowerCase()){
        return "even match";
    } else if (playerSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() =="scissors" || playerSelection.toLowerCase()=="scissors" && computerSelection.toLowerCase()=="paper" || playerSelection.toLowerCase()=="paper" && computerSelection.toLowerCase()=="rock"){
        return "you win";
    } else return "you lose";
}

function game(){
    for (let i = 0 ; i < 5; i++){
        const playerSelection = prompt("Please input your choice");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection,computerSelection));
    }
}

const playerSelection = prompt("Please input your choice");
const computerSelection = getComputerChoice();
console.log("Player: " + playerSelection);
console.log("Computer: " + computerSelection);
console.log(playRound(playerSelection,computerSelection));
console.log(game());