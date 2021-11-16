//generate title
const generateTitle = (answers) => {
  return `# ${answers.title} ![MIT](https://img.shields.io/static/v1?label=MIT&message=License&color=green)`;
};

//generate table of contents

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

//generate usage, if confirme
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
const generateContributing = (answers) => {
  return `## How To Contribute
  
  ${answers.contribution}`;
};

//generate licence
const generateLicense = (answers) => {
  return `## License
 ${answers.licenceType}`;
};

//generate readme here
const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${generateDescription(answers)}

  ${generateInstallation(answers)}

  ${generateUsage(answers)}
   
  ${generateTests(answers)}
  
  ${generateContributing(answers)}
  
  ${generateLicense(answers)}`;
};

module.exports = generateReadme;
