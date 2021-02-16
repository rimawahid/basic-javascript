// Guessing game
//Guess a number form 1 to 5
//Generate a random number between 1 to 5 
//If the guess number match random number;
//Ran the game for 5 times 
// show the number of wons and losts

let numOfWon = 0;

let numOfLost = 0;


for(let i = 0; i < 5; i++){
    const guessNumber = parseInt(prompt("Enter a number form 1 to 5 "));
    const randomNumber = Math.floor(Math.random()*5) + 1;
    if(guessNumber == randomNumber){
        console.log(" You have won")
        numOfWon++;
    }else{
        console.log(" You have lost.Random number was", randomNumber);
        numOfLost++;
}
}

document.write(" Total Number of won: " + numOfWon + "<br/>");
document.write("Total Number of lost: " + numOfLost + "<br>")
