//import inquirer
const inquirer = require("inquirer");

//import file systems
const fs = require("fs");

//import util files here
const generateReadme = require("./utils/generateReadme.js");

//make a list of questions
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "confirm",
    name: "installation",
    message: "Do you have an installation script for your application?",
  },
  //if has installation steps
  {
    type: "input",
    name: "installationSteps",
    message: "Please type the installation steps here:",
    when: (answers) => {
      return answers.installation;
    },
  },
  {
    type: "confirm",
    name: "usage",
    message: "Do you have usage steps for the application?",
  },
  //if has usage steps
  {
    type: "input",
    name: "usageSteps",
    message: "Please type the usage steps here:",
    when: (answers) => {
      return answers.usage;
    },
  },
  {
    type: "confirm",
    name: "testing",
    message: "Does your application require testing?",
  },
  //if has testing steps
  {
    type: "input",
    name: "testingSteps",
    message: "Please type the testing steps here:",
    when: (answers) => {
      return answers.testing;
    },
  },
  {
    type: "list",
    name: "licenceType ",
    choices: [
      { name: "a", value: "a" },
      { name: "a", value: "a" },
      { name: "a", value: "a" },
      { name: "a", value: "a" },
    ],
    message: "Please choose a licence:",
  },
  { type: "input", name: "username", message: "What is your github username?" },
  { type: "input", name: "email", message: "What is your email?" },
  {
    type: "input",
    name: "email",
    message: "How can people contribute to this app?",
  },
];
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const initialize = async () => {
  //prompt questions and get answers
  const answers = await inquirer.prompt(questions);
  console.log(answers);

  const generatedReadme = generateReadme(answers);

  writeToFile("generatedREADME.md", generatedReadme);
};
initialize();
