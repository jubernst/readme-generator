// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message:
      "Please provide a short description explaining the what, why, and how of your project:",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How can someone use your project?",
  },
  {
    type: "input",
    name: "contribution",
    message: "How can someone contribute to your project?",
  },
  {
    type: "input",
    name: "tests",
    message: "How can someone run tests on your project?",
  },
  {
    type: "list",
    name: "license",
    message: "What license is your project released under?",
    choices: ["MIT", "Apache 2.0", "CC0"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log("README created!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    writeToFile("README.md", answers);
  });
}

// Function call to initialize app
init();
