const { questions } = require('../lib/inputHandler');
const inquirer = require('inquirer');

jest.mock('inquirer');

describe('inputHandler', () => {
  describe('questions', () => {
    it('should ask for the correct input and return the correct values', async () => {
      // Mock the inquirer responses
      inquirer.prompt.mockResolvedValue({
        text: 'AB',
        textColor: '#ffffff',
        shape: 'Circle',
        shapeColor: '#000000'
      });

      const response = await questions();

      expect(response).toEqual({
        text: 'AB',
        textColor: '#ffffff',
        shape: 'Circle',
        shapeColor: '#000000'
      });
    });
  });
});