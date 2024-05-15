import inquirer from "inquirer";
import chalk from "chalk";
console.log("Welcome to the number guesing game\nYou have to guess the random number between two given numbers\nGood Luck!");
const numInput = async(msg: string) => {
    let Input = await inquirer.prompt({
        message: msg,
        type: "number",
        name: "input",
    });
    return Input.input
}
const strInput = async(msg: string) => {
    let Input = await inquirer.prompt({
        message: msg,
        type: "input",
        name: "input",
    });
    return Input.input
}
let running: boolean = true;
while(running) {
    let range = await numInput("What do you want the guessing range to be?")
    if(Number.isNaN(range)){
        console.log("range must be a number");
        continue;
    }
    let allowedGuesses = await numInput("How many guesses do you want?");
    if(Number.isNaN(allowedGuesses)) {
        console.log("Allowed guesses must be a number");
        continue;
    }
    let randomNumber: number = Math.floor((Math.random())*range + 1);
    let guesses: number = allowedGuesses - 1;
    while(running && guesses >= 0) {
        let userInput = await numInput(`Guess the number between 1 to ${range}`);
        if(Number.isNaN(userInput)) {
            console.log("Input must be a number.");
            continue;
        }
        if(userInput === randomNumber) {
            console.log(chalk.greenBright("You guessed the number right!"))
            let userInput2 = await strInput("Do you want to continue the game (y/n)");
            if(userInput2 !== "n") {
                break;
            } else {
                running = false;
            }
        } else if(userInput > randomNumber) {
            console.log(chalk.redBright(`Your number is too high.\t\tguesses left: ${guesses}`));
            guesses--;
            continue;
        } else if(userInput < randomNumber) {
            console.log(chalk.redBright(`Your number is too low.\t\tguesses left: ${guesses}`)); 
            guesses--;
            continue;
        }
    }
    if(guesses > 0) {
        continue;
    } else {
        console.log("You ran out of guesses.")
    }
}