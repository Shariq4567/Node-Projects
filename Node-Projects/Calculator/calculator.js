import inquirer from "inquirer";
let calc = await inquirer.prompt({
    type: "number",
    message: "Enter your first number",
    name: "firstNum",
});
let calc2 = await inquirer.prompt({
    type: "number",
    message: "Enter your second number",
    name: "secNum",
});
let actual = await inquirer.prompt({
    type: "list",
    message: "Enter your first number",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    name: "something",
});
if (actual.something == "Addition") {
    console.log(calc.firstNum + calc2.secNum);
}
else if (actual.something == "Subtraction") {
    console.log(calc.firstNum - calc2.secNum);
}
else if (actual.something == "Multiplication") {
    console.log(calc.firstNum * calc2.secNum);
}
else if (actual.something == "Division") {
    console.log(calc.firstNum / calc2.secNum);
}
