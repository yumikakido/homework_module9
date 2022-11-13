const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'string',
        message: 'Enter a title for your project',
        name: 'title',
    },
    {
        type: 'string',
        message: 'Enter a description for your project',
        name: 'description',
    },
    {
        type: 'string',
        message: 'Enter installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'string',
        message: 'Enter usage information for your project',
        name: 'usage',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is your license?',
        choices: ['MIT', 'Apache 2.0', 'BSD 3-Clause License', 'GNU GPL v3'],
      },
      {
        type: 'string',
        message: 'Enter contributing guidelines for your project',
        name: 'contributing',
    },
    {
        type: 'string',
        message: 'Enter test instructions for your project',
        name: 'tests',
    },
    {
        type: 'string',
        message: 'Enter your github username for additional questions',
        name: 'githubUsername',
    },
    {
        type: 'string',
        message: 'Enter your email address for additional questions',
        name: 'email',
        validate: function(val) {
            if(val.includes('@')) {
                return true
            }
            else {
                return false
            }
          }
    },
]

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) return console.log(err);
      });
}

// // TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.log(JSON.stringify(answers, null, '  '))
            writeToFile('GENERATED-README.md', generateMarkdown(answers))
        });
}

// // Function call to initialize app
init();