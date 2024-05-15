import inquirer from "inquirer";
while(true){
let userName = await inquirer.prompt({
    message: "Enter your name:",
    type: "input",
    name: "userInputName",
});
let userPass = await inquirer.prompt({
    message: "Enter your password:",
    type: "password",
    name: "userPass",
    mask: "*",
});
let name: string = userName.userInputName;
let pass: string = userPass.userPass;
    if (name === "shariq" && pass === "1234") {
        let func = await inquirer.prompt({
            message: "Select an option:",
            type: "list",
            name: "functionalities",
            choices: ["Account Balance", "Cash Withdrawal", "Transfer funds", "Cheque Deposit"],
        });
        let AtmFuncton: string = func.functionalities;
        if(AtmFuncton === "Account Balance") {
            let randomBal = Math.floor(Math.random() * 100000)
            console.log(`Account Balance: $${randomBal}`);
            break;
        } else if(AtmFuncton === "Cash Withdrawal") {
            let randomBal = Math.floor(Math.random() * 100000);
            console.log(`Account Balance: $${randomBal}`);
            let withdraw = await inquirer.prompt({
                message: "Enter the amount you want to withdraw:",
                name: "withAmount",
                type: "number",
            });
            if(withdraw.withAmount > randomBal) {
                console.log("Withdrawal unsuccesful, withdrawal amount must be less than account Balance.")
                break;
            } else {
                console.log(`Withdrawal succesful\nAccount Balance: $${randomBal - withdraw.withAmount}`);
                break;
            }
        } else if(AtmFuncton === "Transfer funds") {
            let randomBal = Math.floor(Math.random() * 100000);
            console.log(`Account Balance: $${randomBal}`);
            let withdraw = await inquirer.prompt({
                message: "Enter the amount you want to transfer:",
                name: "transferAmount",
                type: "number",
            });
            let person = await inquirer.prompt({
                message: "Enter the name you want the amount transfer to:",
                name: "personName",
                type: "input",
            });
            if(withdraw.transferAmount > randomBal) {
                console.log("Transfer unsuccesful, transfer amount must be less than account Balance.")
                break;
            } else {
                console.log(`Transfered $${withdraw.transferAmount} to ${person.personName}\nAccount Balance: $${randomBal - withdraw.transferAmount}`);
                break;
            }
        } else if(AtmFuncton === "Cheque Deposit") {
            let randomBal = Math.floor(Math.random() * 100000);
            console.log(`Account Balance: $${randomBal}`);
            let withdraw = await inquirer.prompt({
                message: "Enter the amount you want to transfer:",
                name: "chequeAmount",
                type: "number",
            });
            if (withdraw.chequeAmount > 0){
                console.log(`Deposit succesful\nAccount Balance: $${randomBal + withdraw.chequeAmount}`);
                break;
            }
        }
    } else {
        console.log("Incorrect password or name. Please try again")
        continue;
    }
}
