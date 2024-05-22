#! /usr/bin/env node
import inquirer from "inquirer";
let balance = 0;
let myID = Math.floor(10000 + Math.random() * 90000); //generating id for student
let studentId = myID;
const fee = {
    "Digital Marketing": 2000,
    TypeScript: 5000,
    Ecommerce: 10000,
};
let enroll = await inquirer.prompt([
    {
        message: "Enter your name :",
        type: "input",
        name: "name",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter the correct value.";
        },
    },
    {
        message: "Select one of the courses:",
        type: "list",
        name: "course",
        choices: ["Digital Marketing", "TypeScript", "Ecommerce"],
    },
]);
console.log(`Your Tutionfee is ${fee[enroll.course]}`);
let payment = await inquirer.prompt([
    {
        message: "Select the payment method:",
        type: "list",
        name: "paymenyMethod",
        choices: ["EasyPaisa", "JazzCash", "Bank Transfer"],
    },
    {
        message: "Transfer Money:",
        name: "amount",
        type: "input",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "please enter the correct value.";
        },
    },
]);
const tutionFees = fee[enroll.course];
const paidAmount = parseFloat(payment.amount);
if (tutionFees === paidAmount) { // checking weather correct amount being paid according to the course
    console.log(`You have selected payment method : ${payment.paymenyMethod}`);
    console.log(`Your balance is ${balance}`);
    console.log(`Congratulation you have been enrolled in ${enroll.course}.`);
    let lastQuestion = await inquirer.prompt([
        {
            message: "What do you want to do next:",
            name: "ask",
            type: "list",
            choices: ["Show Status", "Exit"],
        },
    ]);
    if (lastQuestion.ask === "Show Status") {
        console.log(`Student Name : ${enroll.name}`);
        console.log(`Student ID : ${studentId}`);
        console.log(`Course Enrolled : ${enroll.course}`);
        console.log(`Paid Amount : ${payment.amount}`);
        console.log(`Balance : ${(balance += payment.amount)}`);
    }
    else {
        console.log("Exiting student management system");
    }
}
else {
    console.log(`Invalid amount.`);
}
