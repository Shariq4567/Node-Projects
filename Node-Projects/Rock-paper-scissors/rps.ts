import inquirer from "inquirer";
import chalk from "chalk";
let choices = ["Rock", "Paper", "Scissors"];
let running = true;
while (running) {
    let randomIndex = Math.floor(Math.random() * 3);
    let compChoice = choices[randomIndex];
    let userInput = await inquirer.prompt({
        name: "choice",
        message: "Enter your choice (rock, paper, scissors): ",
        type: "list",
        choices: ["Rock", "Paper", "Scissors"],
    });
    let input = userInput.choice;
    if (choices.includes(input)) {
        if (input === compChoice) {
            console.log(chalk.grey("It was a tie."));
            console.log(chalk.grey(`Your choice: ${input}, Computer choice: ${compChoice}`));
            let quitInput = await inquirer.prompt({
                name: "quit",
                message: "Do you want to continue the game? (y/n)",
                type: "input"
            });
            if (quitInput.quit === "n") {
                running = false;
            }
            else {
                continue;
            }
        }
        else if ((input === "Rock" && compChoice === "Scissors") || (input === "Paper" && compChoice === "Rock") || (input === "Scissors" && compChoice === "Paper")) {
            console.log(chalk.greenBright("You won!"));
            console.log(chalk.green(`Your choice: ${input}, Computer choice: ${compChoice}`));
            let quitInput = await inquirer.prompt({
                name: "quit",
                message: "Do you want to continue the game? (y/n)",
                type: "input"
            });
            if (quitInput.quit === "n") {
                running = false;
            }
            else {
                continue;
            }
        } else {
            console.log(chalk.redBright("You lost!"));
            console.log(chalk.red(`Your choice: ${input}, Computer choice: ${compChoice}`));
            let quitInput = await inquirer.prompt({
                name: "quit",
                message: "Do you want to continue the game? (y/n)",
                type: "input"
            });
            if (quitInput.quit === "n") {
                running = false;
            }
            else {
                continue;
            }
        }
    }
    else {
        console.log("Please enter (rock, paper or scissors) only.");
        continue;
    }
}
