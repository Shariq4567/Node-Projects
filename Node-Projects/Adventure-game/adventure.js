import inquirer from "inquirer";
import chalk from "chalk";
const ask = async (message, choices, correct, ...conseq) => {
    const input = await inquirer.prompt({
        "message": message,
        "name": "inp",
        "type": "list",
        "choices": choices,
    });
    const index = choices.indexOf(input.inp);
    if (input.inp === correct) {
        console.log("");
        console.log(chalk.greenBright(conseq[index]));
        console.log("");
    }
    else {
        console.log("");
        console.log(chalk.redBright(conseq[index]));
        console.log("");
        process.exit();
    }
};
await ask('"The Lost Treasure of Captain Blackbeard"', ["Start Game", "Exit"], "Start Game", `Welcome to "The Lost Treasure of Captain Blackbeard"`, "");
await ask(`You are an intrepid explorer on a quest to find the long-lost treasure of the notorious pirate Captain Blackbeard. Legends say that the treasure is hidden on a remote island in the Caribbean, guarded by ancient traps and perilous obstacles.

As you sail towards the island, a fierce storm suddenly engulfs your ship, threatening to dash it against the rocky shore. You must make a quick decision to save yourself and your crew.`, ["Option 1: Steer the ship towards the nearest island for shelter.",
    "Option 2: Drop anchor and wait out the storm."], "Option 2: Drop anchor and wait out the storm.", "As you steer the ship towards the nearest island, you realize too late that it is inhabited by hostile natives. They capture you and your crew, ending your quest for the treasure.", "You decide to drop anchor and wait out the storm. After a tense night, the storm subsides, and you resume your journey to the treasure island.");
await ask(`Upon reaching the island, you encounter a series of challenges, including navigating through dense jungles, deciphering cryptic clues, and avoiding traps left behind by Captain Blackbeard.`, ["Option 1: Follow the path marked on the treasure map.",
    "Option 2: Venture into the dark caves rumored to hide the treasure.",
    "Option 3: Search for hidden clues among the ruins of an ancient temple."], "Option 1: Follow the path marked on the treasure map.", "You follow the path marked on the treasure map and eventually stumble upon a hidden cave. Inside, you find Captain Blackbeard's treasure chest, filled with gold coins and precious gems. Congratulations, you have found the lost treasure and completed your quest!", "Your journey takes a dangerous turn as you encounter deadly traps and fierce guardians protecting the treasure. Despite your bravery, you are unable to overcome the obstacles, and your quest ends in failure.", "Your journey takes a dangerous turn as you encounter deadly traps and fierce guardians protecting the treasure. Despite your bravery, you are unable to overcome the obstacles, and your quest ends in failure.");
