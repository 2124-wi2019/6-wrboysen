/*
Bill Boysen
boysen_a06c.js
INFO_2124_WW
Thoendel
1/26/2020
*/

//winning numbers: 22, 42, 43, 47, 61;

let lottoPicks = [];
let powerBallPick = getLottoNumber(); 
let winnings = 0; 

/* WRITE YOUR SOLUTION BETWEEN THIS LINE */
//Executes while the array still needs numbers
while (lottoPicks.length < 5) {
    //Calls the function and pushes its result to the array
    lottoPicks.push(getLottoNumber());
}
//Generates a final number for the powerball
getLottoNumber();
//Cycles through the numbers in the array to check them against the winning numbers
for (let i = 0; i < lottoPicks.length; i++) {
    //switch statement to add money to winnings if the numbers match
    switch (lottoPicks[i]) {
        case 22:
            winnings = winnings + 10;
            break;
        case 42:
            winnings = winnings + 10;
            break;
        case 43:
            winnings = winnings + 10;
            break;
        case 47:
            winnings = winnings + 10;
            break;
        case 61:
            winnings = winnings + 10;
            break;
        case powerBallPick:
            winnings = winnings + 100;
    }

}
//Tells the user they won if they have any matches or that they lost if there are no matches
if (winnings != 0) {
    console.log(`Congratulations! You won $${winnings}!`);
} else {
    console.log("Sorry, you didn't win anything. Better luck next time!");
}
    
/* AND THIS LINE */

function getLottoNumber() {
    //returns a random number between 1 and 100;
    const min = Math.ceil(1);       //Minimum value;
    const max = Math.floor(100);    //Maximum value;
    return Math.floor(Math.random() * (max - min)) + min;
}