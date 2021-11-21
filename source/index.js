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
    type: "list",
    name: "licenceType",
    choices: [
      { name: "MIT", value: "MIT" },
      { name: "IBM", value: "IPL1.0" },
      { name: "Apache", value: "Apache2.0" },
      { name: "Eclipse", value: "EPL1.0" },
    ],
    message: "Please choose a licence:",
  },
  { type: "input", name: "username", message: "What is your github username?" },
  { type: "input", name: "email", message: "What is your email?" },
  {
    type: "input",
    name: "contribution",
    message: "How can people contribute to this app?",
  },
];
//if has installation steps
const installationSteps = [
  {
    type: "confirm",
    name: "installation",
    message: "Do you have an installation script for your application?",
  },
  // {
  //   type: "input",
  //   name: "installationSteps",
  //   message: "Please type the installation steps here:",
  //   when: (answers) => {
  //     return answers.installation;
  //   },
  // },
];

//if has usage steps
const usageSteps = [
  {
    type: "confirm",
    name: "usage",
    message: "Do you have usage steps for the application?",
  },
  // {
  //   type: "input",
  //   name: "usageSteps",
  //   message: "Please type the usage steps here:",
  //   when: (answers) => {
  //     return answers.usage;
  //   },
  // },
];

const testingSteps = [
  {
    type: "confirm",
    name: "testing",
    message: "Does your application require testing?",
  },
  // if has testing steps
  // {
  //   type: "input",
  //   name: "testingSteps",
  //   message: "Please type the testing steps here:",
  //   when: (answers) => {
  //     return answers.testing;
  //   },
  // },
];

const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

const loopQuestion = async (question) => {
  let inProgress = true;
  const results = [];

  while (inProgress) {
    const answers = await inquirer.prompt(question);
    results.push(answers);
    const { add } = await inquirer.prompt({
      type: "confirm",
      message: "do you want to add another?",
      name: "add",
    });

    if (!add) {
      inProgress = false;
    }
  }

  return results;
};

const initialize = async () => {
  //prompt questions and get answers
  const answers = await inquirer.prompt(questions);

  answers.installationAnswers = await inquirer.prompt(installationSteps);
  if (answers.installationAnswers) {
    const results = await loopQuestion({
      type: "input",
      name: "installation",
      message: "What is your installation step?",
      default: false,
    });
    answers.installationInstructions = results;
  }

  answers.usageAnswers = await inquirer.prompt(usageSteps);
  if (answers.usageAnswers) {
    const results = await loopQuestion({
      type: "input",
      name: "usage",
      message: "What is your usage step?",
      default: false,
    });
    answers.usageInstructions = results;
  }
  answers.testingAnswers = await inquirer.prompt(testingSteps);
  if (answers.testingAnswers) {
    const results = await loopQuestion({
      type: "input",
      name: "testing",
      message: "What is your testing step?",
      default: false,
    });
    answers.testingInstructions = results;
  }

  console.log("ReadMe file was successfully generated.");

  const generatedReadme = generateReadme(answers);

  writeToFile("generatedREADME.md", generatedReadme);
};
initialize();
