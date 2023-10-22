// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const generateREADME = ({Title, Description, TOC, Installation, Usage, License, Contributions, Tests, Future }) =>
`
Title: ${Title}

Description: 
${Description}

Table of Contents:
${TOC}

Installation Instructions:
${Installation}

App Usage:
${Usage}

License:
${License}

Contributers:
${Contributions}

Tests:
${Tests}

Future Developments:
${Future}
`;


inquirer
    .prompt([
        {
            type: 'input',
            name: 'Title',
            message: 'Whwat is the Title of your project?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'add a description of your project.',
        },
        {
            type: 'input',
            name: 'TOC',
            message: 'input Table of contents information',
        },
        {
            type: 'input',
            name: 'Installation',
            message: 'input Installation instructions',
        },
        {
            type: 'input',
            name: 'Usage',
            message: 'What should this product be used for?',
        },
        {
            type: 'input',
            name: 'License',
            message: 'What license will be used',
        },
        {
            type: 'input',
            name: 'Contributions',
            message: 'Who contributed to this project?',
        },
        {
            type: 'input',
            name: 'Tests',
            message: 'explain tests youve done on the application',
        },
        {
            type: 'input',
            name: 'Future',
            message: 'What are the plans for future Developments?',
        },
    ])
    .then((answers) => {
        const READMEcontent = generateREADME(answers);

        fs.writeFile('README', READMEcontent, (err) =>
        err? console.log(err) : console.log('Successfully created README')
        );
    });



// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
// function init() {}

// Function call to initialize app
// init();
