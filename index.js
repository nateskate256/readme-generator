// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fileHelper = require("fs")

inquirer.prompt([
    {
        type: "input",
        message: "What is the project title?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the project description?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the Installation Instructions?",
        name: "installation",
    },
    {
        type: "input",
        message: "How do you use this?",
        name: "usage",
    },
    {
        type: "checkbox",
        message: "What is the project license?",
        choices: ["wtfpl", "artistic-2.0", "mit"],
        name: "license",
    },
    {
        type: "input",
        message: "How does someone contribute to your repo?",
        name: "contributing",
    },
    {
        type: "input",
        message: "How do you test the code?",
        name: "tests",
    },
    {
        type: "input",
        message: "What is your GitHub Username? (we will create a link to your GitHub repo)",
        name: "questions",
    },
    {
        type: "input",
        message: "What do you want the file name to be?",
        name: "fileName",
    }
    

]

) .then (answers => {
    console.log(answers)
    console.log(answers.title)
    writeToFile(answers.fileName, answers)
})

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName)
    fileHelper.writeFile(fileName, generateMarkdown(data), () => {})
}

function generateMarkdown(markdownData) {
    let licenseVar;
    if (markdownData.license == "wtfpl"){
    licenseVar = "![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)"
    }
    else if (markdownData.license == "artistic-2.0" ){
        licenseVar = "![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)"
    }
    else if (markdownData.license == "mit" ){
        licenseVar = "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)"
    }
    return `
# ${markdownData.title}

## Description

${markdownData.description}

## Table of Contents

- [Read Me Generator](#read-me-generator)
  * [Description](#description)
  * [Table of Contents](#table-of-contents)
  * [Installation Instructions](#installation-instructions)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)

## Installation Instructions

${markdownData.installation}

## Usage

${markdownData.usage}


## License

${licenseVar}

## Contributing

${markdownData.contributing}

## Tests
${markdownData.tests}

## Questions

For questions about my repo please click [here](https://github.com/${markdownData.questions}) to see my GitHub repo.






    `
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
