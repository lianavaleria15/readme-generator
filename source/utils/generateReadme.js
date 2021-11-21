//generate table of contents

//generate title
const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.licenceType}](https://img.shields.io/static/v1?label=${answers.licenceType}&message=License&color=green)`;
};

//generate table of contents
const generateTableOfContents = ({ installation, usage, testing }) => {
  //if there are installation steps

  return `## Table of Contents
  - [Description](#description)
  ${installation ? "- [Installation](#installation)" : ""}
  ${usage ? "- [Usage](#usage)" : ""}
  ${testing ? "- [Tests](#tests)" : ""}
  - [Contributing](#contributing)
  - [License](#license)`;
};

//generate description
const generateDescription = (answers) => {
  return `## Description
  
  ${answers.description}`;
};

//generate installation steps, if confirmed
const generateInstallation = (answers) => {
  if (answers.installationAnswers) {
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
  if (answers.usageAnswers) {
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
  if (answers.testingAnswers) {
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
  return `## How To Contribute
  
  ${contribution}`;
};

//generate questions section
const generateQuestions = (answers) => {
  return `## Questions
  
  If you have any questions related to the rep, please contact ${answers.username} via email ${answers.email}`;
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
