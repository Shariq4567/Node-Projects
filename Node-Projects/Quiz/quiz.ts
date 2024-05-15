import inquirer from "inquirer";
import chalk from "chalk";
let score: number = 0;
const input = async (question: string, choice1: string, choice2: string, choice3: string, choice4: string, correct: string) => {
    const option = await inquirer.prompt({
        name: "choice",
        message: question,
        type: "list",
        choices: [choice1, choice2, choice3, choice4],
    });
    if(option.choice == correct) {
        score += 1;
        console.log(`Streak: ${score}`);
        return chalk.greenBright("Correct");
    } else {
        score = 0;
        console.log(`Streak: ${score}`);
        return chalk.redBright(`Incorrect the answer was "${correct}"`);
    }
}
console.log(await input("What is the capital of Pakistan", "Karachi", "Peshawar", "Lahore", "Islamabad", "Islamabad"));

console.log(await input("What is the chemical symbol for gold?", "Au", "Pb", "Fe", "Ag", "Au"));

console.log(await input("Who painted the famous artwork 'Mona Lisa'?", "Michelangelo", "Pablo Picasso", "Vincent van Gogh", "Leonardo da Vinci", "Leonardo da Vinci"));

console.log(await input("What is the largest planet in our solar system?", "Saturn", "Jupiter", "Venus", "Earth", "Jupiter"));

console.log(await input("What is the chemical symbol for water?", "H2O", "O2", "CO2", "NaCl", "H2O"));
console.log(await input("How many planets are there in the solar system", "5", "9", "8", "7", "8"));