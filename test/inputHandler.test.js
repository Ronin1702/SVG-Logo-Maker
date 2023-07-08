const { questions } = require('../lib/inputHandler');
const inquirer = require('inquirer');
//tell jest test to mock inquirer
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
    it('should convert color inputs to lowercase', async () => {
      // Mock the inquirer responses
      inquirer.prompt.mockResolvedValue({
        text: 'AB',
        textColor: 'WHITE',
        shape: 'Circle',
        shapeColor: 'BLACK'
      });

      const response = await questions();

      expect(response).toEqual({
        text: 'AB',
        textColor: 'white',
        shape: 'Circle',
        shapeColor: 'black'
      });
    });
    it('should accept color keyword or hexadecimal color as valid inputs', async () => {
      // Mock the inquirer responses
      inquirer.prompt.mockResolvedValue({
        text: 'AB',
        textColor: 'WHITE',
        shape: 'Circle',
        shapeColor: '#000000'
      });

      const response = await questions();

      // Regex patterns to match a color keyword or a hexadecimal color
      const colorKeywordPattern = /^[a-z]+$/i;
      const hexColorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/i;

      // Test textColor
      const isTextColorKeyword = colorKeywordPattern.test(response.textColor);
      const isTextColorHex = hexColorPattern.test(response.textColor);
      expect(isTextColorKeyword || isTextColorHex).toBeTruthy();

      // Test shapeColor
      const isShapeColorKeyword = colorKeywordPattern.test(response.shapeColor);
      const isShapeColorHex = hexColorPattern.test(response.shapeColor);
      expect(isShapeColorKeyword || isShapeColorHex).toBeTruthy();
    });
  });
});