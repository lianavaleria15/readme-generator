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

//generate usage, if confirmed

//generate tests, if confirmed

//generate contributing

//generate licence

//generate readme here
const generateReadme = (answers) => {
  return `${generateTitle(answers)}
  
  ${generateDescription(answers)}`;
};

module.exports = generateReadme;
