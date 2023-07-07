const { questions } = require('./lib/inputHandler');
const { writeToFile } = require('./lib/fileHandler');
const { Triangle, Circle, Square } = require('./lib/shapes');

questions()
  .then(answers => {
    const { text, textColor, shape, shapeColor } = answers;

    let ShapeClass;
    switch (shape) {
      case 'Triangle':
        ShapeClass = Triangle;
        break;
      case 'Circle':
        ShapeClass = Circle;
        break;
      case 'Square':
        ShapeClass = Square;
        break;
    }

    const shapeInstance = new ShapeClass();
    shapeInstance.setColor(shapeColor);

    const svgContent = `
      <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${shapeInstance.render()}
        <text x="150" y="130" font-size="60" text-anchor="middle" fill="${textColor}">
          ${text}
        </text>
      </svg>
    `;
//WHEN I have entered input for all the prompts, THEN an SVG file is created named `logo.svg`
    writeToFile(`${text}-logo.svg`, svgContent);

    console.log(`Generated ${text}-logo.svg in the examples folder`);
  });