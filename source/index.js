//import inquirer
const inquirer = require("inquirer");

//import util files here
//const utilFunctions = require ("relative_path_to_util_functions")

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
  {
    type: "confirm",
    name: "usageSteps",
    message: "Do you have usage steps for the application?",
  },
  {
    type: "confirm",
    name: "testing",
    message: "Does your application require testing?",
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

//installation steps
const installationSteps = [
  {
    type: "input",
    name: "installationSteps",
    message: "Please type the installation steps here:",
  },
];

//usage steps question
const usageSteps = [
  {
    type: "input",
    name: "usageSteps",
    message: "Please type the usage steps here:",
  },
];

//testing steps question
const testingSteps = [
  {
    type: "input",
    name: "testingSteps",
    message: "Please type the testing steps here:",
  },
];

const initialize = async () => {
  //prompt questions and get answers
  const answers = await inquirer.prompt(questions);
  console.log(answers);

  //conditions for testing, usage, and installation steps
  if (answers.installation) {
    //ask installation steps
    const installationAnswer = await inquirer.prompt(installationSteps);
    console.log(installationAnswer);
  }

  if (answers.usageSteps) {
    const usageAnswer = await inquirer.prompt(usageSteps);
    console.log(usageAnswer);
  }

  if (answers.testing) {
    const testingAnswer = await inquirer.prompt(testingSteps);
    console.log(testingAnswer);
  }
};
initialize();
