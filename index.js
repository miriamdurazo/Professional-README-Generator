import inquirer from 'inquirer';
import * as fs from 'fs';
import  * as genMarkdown from './generateMarkdown.js';

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'project_title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        message: 'Description',
        name: 'description',
      },
      {
          type: 'input',
          message: 'What are the installation instructions?',
          name: 'installation',
      },
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contributors',
      },
      {
        type: 'input',
        message: 'Which tests did you run?',
        name: 'tests',
      },
      {
          type: 'input',
          message: 'Enter your GitHub username:',
          name: 'user_name',
      },
      {
          type: 'input',
          message: 'Enter the link to your GitHub profile:',
          name: 'profile',
      },
      {
          type: 'input',
          message: 'Enter your email address:',
          name: 'email',
      }
];

// function to write README file
function writeToFile(contents) {

    // arguments for hte writeFunction = 'filename', text to be written error function
    fs.writeFile('README.md', genMarkdown(contents), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  };


// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((data) => {
        writeToFile(data);
    }
)}

init();