describe('Shapes', () => {
  test('Triangle should return correct SVG', () => {
    const triangle = new Triangle();
    triangle.setColor("blue");
    expect(triangle.render()).toEqual('<polygon points="150,20 280,180 20,180" fill="blue" />');
  });

  test('Circle should return correct SVG', () => {
    const circle = new Circle();
    circle.setColor("red");
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
  });

  test('Square should return correct SVG', () => {
    const square = new Square();
    square.setColor("green");
    expect(square.render()).toEqual('<rect x="50" y="50" width="200" height="200" fill="green" />');
  });
});
