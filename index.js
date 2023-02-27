import inquirer from 'inquirer';
import fs from 'fs';

prompt([
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
      message: 'What do you want to include in the table of contents?',
      name: 'table_of_contents',
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
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
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    // arguments for hte writeFunction = filename, text to be written error function
    writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });