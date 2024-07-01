#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: "Q1.What is the correct way to check if two values are not equal in Typescript?",
        choices: ["a == b", "a === b", "a = b", "a !== b"]
    },
    {
        name: "question2",
        type: "list",
        message: "Q2.Which of the following characters is commonly allowed in variable names in Typescript?",
        choices: ["$", "@", "#", "&"]
    },
    {
        name: "question3",
        type: "list",
        message: "Q3.Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+", "-", "*", "/"]
    }
]);
let score = 0;
if (quiz.question1 === "a !== b") {
    console.log("correct");
    ++score;
}
else {
    console.log("Incorrect");
}
if (quiz.question2 === "$") {
    console.log("correct");
    ++score;
}
else {
    console.log("Incorrect");
}
if (quiz.question3 === "+") {
    console.log("correct");
    ++score;
}
else {
    console.log("Incorrect");
}
console.log(`score : ${score}`);
