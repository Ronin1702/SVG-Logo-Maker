const inquirer = require('inquirer');

const questions = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter text for logo (max 3 characters):',
      //WHEN I am prompted for text, THEN I can enter up to three characters
      validate: function (value) {
        if (value.length > 3) {
          return 'Text too long. Please try again.';
        } else {
          return true;
        }
      }
    },

    //WHEN I am prompted for the text color, THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:'
    },

    // WHEN I am prompted for a shape, THEN I am presented with a list of shapes to choose from: circle, triangle, and square.
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square']
    },

    // WHEN I am prompted for the shape's color, THEN I can enter a color keyword (OR a hexadecimal number)
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape:'
    }
  ]);
};

module.exports = { questions };