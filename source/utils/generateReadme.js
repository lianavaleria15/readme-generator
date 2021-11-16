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
  return `## Installation
  
  Run the following script to install the packages required for the application:
  
  \`\`\`
 ${answers.installationSteps}
  \`\`\``;
};

//generate usage, if confirmed
const generateUsage = (answers) => {
  return `## Usage
  
  To use the application run the following script:
  
  \`\`\`
  ${answers.usageSteps}
  \`\`\``;
};

//generate tests, if confirmed

//generate contributing

//generate licence

//generate readme here
const generateReadme = (answers) => {
  return `${generateTitle(answers)};
  
  ${generateDescription(answers)};

  ${generateInstallation(answers)};

  ${generateUsage(answers)}`;
};

module.exports = generateReadme;
