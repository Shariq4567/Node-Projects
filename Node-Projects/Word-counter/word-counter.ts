import inquirer from "inquirer"
let input = await inquirer.prompt({
    "name": "userInput",
    "message": "Enter a sentence",
    "type": "input",
});
const inp = input.userInput;
let words = inp.split(" ")
let wordCount = 0;
for(let x of words) {
    console.log(x);
    wordCount += 1;
}
await console.log(`The number of words in your sentence are "${wordCount}".`);
