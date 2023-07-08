const inquirer = require('inquirer');

const isValidColorInput = (value) => {
  const colorKeywordPattern = /^[a-z]+$/i;
  const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;
  if (colorKeywordPattern.test(value) || hexColorPattern.test(value)) {
      return true;
  }
  return 'Please enter a valid color keyword or hexadecimal number.';
};

const questions = async () => {
  const answers = await inquirer.prompt([
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
      message: 'Enter a color keyword or hexadecimal number for the text:',
      validate: isValidColorInput
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
      message: 'Enter a color keyword or hexadecimal number for the shape:',
      validate: isValidColorInput
    }
  ]);
   // Convert color inputs to lowercase
   if (answers.textColor) {
    answers.textColor = answers.textColor.toLowerCase();
  }

  if (answers.shapeColor) {
    answers.shapeColor = answers.shapeColor.toLowerCase();
  }

  return answers;
};

module.exports = { questions };