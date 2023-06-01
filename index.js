//README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Include a short description for your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please include installation instructions',
        name: 'install'
    },
    {
        type: 'input',
        message: 'Please include usage information',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'Please include contribution guidelines',
        name: 'contributions'
    },
    {
        type: 'input',
        message: 'Please include any testing instructions',
        name: 'testInstructions'
    },
    {
        type: 'list',
        message: 'Please choose a license for your project:',
        choices: ['these', 'are', 'license', 'choices'],
        name: 'license'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'userName'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'userEmail'
    },
])
.then((data) => {
    console.log(data);
    infoStr = generateMarkdown(data);
    writeToFile('./generated/readme.md', infoStr);

});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
    })
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.title}

## Description 

${data.description}

## Table of Contents

## Installation

${data.install}

## Usage

${data.usageInfo}

## Contributing

${data.contributions}

## Test Instructions

${data.testInstructions}

## License

${data.license}
`};

// TODO: Create a function to initialize app
function init() {};

// Function call to initialize app
init();
