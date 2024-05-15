import inquirer from "inquirer";
class Student {
    name;
    age;
    courses;
    feesPaid;
    id;
    constructor(name, age, courses, feesPaid, id) {
        this.name = name;
        this.age = age;
        this.courses = courses;
        this.feesPaid = feesPaid;
        this.id = id;
    }
    showDetails() {
        console.log(`Id: ${this.id}`);
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Course: ${this.courses}`);
        console.log(`FeesPaid: ${this.feesPaid}`);
    }
}
let enrolledStudents = [];
let uniqId = 1;
while (true) {
    let create = true;
    let show = true;
    let control = await inquirer.prompt({
        "name": "control",
        "message": "Select an option",
        "type": "list",
        "choices": ["Enroll Student", "View Student Info"]
    });
    if (control.control === "Enroll Student") {
        create = true;
        show = false;
    }
    else {
        show = true;
        create = false;
    }
    while (create) {
        let info = await inquirer.prompt([{
                "name": "name",
                "message": "Enter your name:",
                "type": "input",
            },
            {
                "name": "age",
                "message": "Enter your age:",
                "type": "number",
            },
            {
                "name": "courses",
                "message": "Select your course/courses:",
                "type": "checkbox",
                "choices": ["Software Engineering Course", "Medical Course", "Cybersecuriy Course", "Data analyst Course"]
            },
            {
                "name": "fees",
                "message": "Fees Condition",
                "type": "list",
                "choices": ["Paid", "Unpaid"]
            }
        ]);
        enrolledStudents.push(new Student(info.name, info.age, info.courses, info.fees, uniqId));
        console.log("Student Succesfully Enrolled.");
        uniqId += 1;
        let something = await inquirer.prompt({
            "name": "askCon",
            "message": "Do you want to continue:",
            "type": "list",
            "choices": ["yes", "no"],
        });
        if (something.askCon === "no") {
            create = false;
        }
        else {
            continue;
        }
    }
    while (show) {
        let inpName = await inquirer.prompt({
            "message": "Enter student's name:",
            "name": "studName",
            "type": "input",
        });
        for (let stud of enrolledStudents) {
            if (enrolledStudents.length > 0) {
                if (inpName.studName === stud.name) {
                    console.log(stud.showDetails());
                    let something = await inquirer.prompt({
                        "name": "askCon",
                        "message": "Do you want to continue:",
                        "type": "list",
                        "choices": ["yes", "no"],
                    });
                    if (something.askCon === "no") {
                        create = false;
                    }
                    else if (something.askCon === "yes") {
                        break;
                    }
                }
            }
        }
        if (enrolledStudents.length > 0) {
            console.log("Student name not found.");
        }
        else {
            console.log("There are no enrolled students.");
            show = false;
        }
    }
}
