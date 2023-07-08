// Importing the Shape classes.
const { Triangle, Circle, Square } = require('../lib/shapes.js');

// Starting the test suite for the Shape classes.
describe('Shapes', () => {
  // Each shape is tested in its own nested suite.

  // Testing the Triangle class.
  describe('Triangle', () => {
    it('should render an SVG string for Triangle with the given color', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 10 10, 190 290, 190" fill="blue" />');
    });
  });

  // Testing the Circle class.
  describe('Circle', () => {
    it('should render an SVG string for Circle with the given color', () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
    });
  });

  // Testing the Square class.
  describe('Square', () => {
    it('should render an SVG string for Square with the given color', () => {
      const shape = new Square();
      shape.setColor("green");
      expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="green" />');
    });
  });
});
