//generate title
const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.licenceType}](https://img.shields.io/static/v1?label=${answers.licenceType}&message=License&color=green)\n`;
};

//generate dynamic table of contents elements
const getDynamicTocElements = ({
  installationAnswers,
  usageAnswers,
  testingAnswers,
}) => {
  //array of dynamic toc contents
  const contents = [];

  //if installation, answers,testing present, push to array
  if (installationAnswers.installation)
    contents.push("- [Installation](#installation)");
  if (usageAnswers.usage) contents.push("- [Usage](#usage)");
  if (testingAnswers.testing) contents.push("- [Testing](#testing)");

  return contents;
};

//generate table of contents
const generateTableOfContents = (answers) => {
  const contents = [
    "- [Description](#description)",
    ...getDynamicTocElements(answers),
    "- [Contributing](#contributing)",
    "- [Questions](#questions)",
    "- [License](#license)",
  ];

  return `## Table of Contents\n
  
${contents.join("\n")}`;
};

//generate description
const generateDescription = (answers) => {
  return `\n## Description
  
  ${answers.description}`;
};

//generate installation steps, if confirmed
const generateInstallation = (answers) => {
  if (answers.installationAnswers.installation) {
    return `## Installation
  
  Run the following script to install the packages required for the application:
  
  
${answers.installationInstructions
  .map(function (answer) {
    return `\`\`\`
  ${answer.installation}
  \`\`\``;
  })
  .join("\n")}

  `;
  } else {
    return ``;
  }
};

//generate usage, if confirm
const generateUsage = (answers) => {
  if (answers.usageAnswers.usage) {
    return `## Usage
  
  To use the application run the following script:

${answers.usageInstructions
  .map(function (answer) {
    return `\`\`\`
  ${answer.usage}
  \`\`\``;
  })
  .join("\n")}
  
  `;
  } else {
    return ``;
  }
};

//generate usage, if confirm
const generateTests = (answers) => {
  if (answers.testingAnswers.testing) {
    return `## Tests
  
  To test the application run the following script:

${answers.testingInstructions
  .map(function (answer) {
    return `\`\`\`
  ${answer.testing}
  \`\`\``;
  })
  .join("\n")}
  
  `;
  } else {
    return ``;
  }
};

//generate contributing
const generateContributing = ({ contribution }) => {
  return `## Contributing
  
  If you would like to contribute to this project please:
  ${contribution}`;
};

//generate questions section
const generateQuestions = (answers) => {
  return `## Questions
  
  If you have any questions related to the rep, please contact [${answers.username}](https://github.com/${answers.username}) via email [${answers.email}](mailto:${answers.email})`;
};

//generate licence
const generateLicense = ({ licenceType }) => {
  return `## License

  This project is licensed under the ${licenceType}
 `;
};

//generate readme here
const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${generateTableOfContents(answers)}

  ${generateDescription(answers)}

  ${generateInstallation(answers)}

  ${generateUsage(answers)}
   
  ${generateTests(answers)}
  
  ${generateContributing(answers)}

  ${generateQuestions(answers)}

  ${generateLicense(answers)}`;
};

module.exports = generateReadme;
