class Shape {
    constructor() {
        this.color = 'black';
    }

    setColor(color) {
        this.color = color;
    }

    textHeight() {
        throw new Error('No Y value.');
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
    textHeight() {
        return 168;
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
    textHeight() {
        return 125;
    }
}

class Square extends Shape {
    render() {
        return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
    textHeight() {
        return 145;
    }
}

module.exports = {
    Triangle,
    Circle,
    Square
};  