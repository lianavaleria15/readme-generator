//generate title
const generateTitle = (answers) => {
  return `# ${answers.title} ![${answers.licenceType}](https://img.shields.io/static/v1?label=${answers.licenceType}&message=License&color=green)`;
};

//generate table of contents
const generateTableOfContents = (answers) => {
  //if there are installation steps

  return `## Table of Contents
  - [answers.description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Tests](#tests)
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
  if (answers.installation) {
    return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
${answers.installationSteps}
\`\`\`
  `;
  } else {
    return ``;
  }
};

//generate usage, if confirm
const generateUsage = (answers) => {
  if (answers.usage) {
    return `## Usage
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.usageSteps}
  \`\`\`
  `;
  } else {
    return ``;
  }
};

//generate tests, if confirmed
const generateTests = (answers) => {
  if (answers.testing) {
    return `## Tests
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.testingSteps}
  \`\`\`
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
const geneerateQuestions = (answers) => {
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

  ${generateContributing(answers)}
  
  ${generateLicense(answers)}`;
};

module.exports = generateReadme;
