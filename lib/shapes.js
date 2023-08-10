// const { questions } = require("./questions");

class Shape {
  // TODO Move svgTemplate value to writeFile function
//   svgTemplate = `<svg version="1.1"
//   width="300" height="200"
//   xmlns="http://www.w3.org/2000/svg">
//   <rect width="100%" height="100%" fill="white" />
//   ${this.shapeTemplate}
//   <text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.textSubmit}</text>
// </svg>`;

  constructor(shapeColor, textSubmit, textColor) {
    this.shapeColor = shapeColor;
    this.textSubmit = textSubmit;
    this.textColor = textColor;
  };
  
  setColor(shapeColor) {
    if(shapeColor) {
      return this.shapeColor = shapeColor;
    }
    return this.shapeColor;
  };
};

class Circle extends Shape {
  constructor(shapeColor, textSubmit, textColor) {
    super(shapeColor, textSubmit, textColor);
  };

  render() {
    return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`
  };
};

class Square extends Shape {
  constructor(shapeColor, textSubmit, textColor) {
    super(shapeColor, textSubmit, textColor);
  };

  render() {
    return `<rect width="200" height="200" fill="${this.shapeColor}" />`
  };
};

class Triangle extends Shape {
  constructor(shapeColor, textSubmit, textColor) {
    super(shapeColor, textSubmit, textColor);
  };

  render() {
    return `<polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}" />`;
  };
};

testShape = new Shape('black', 'ggg', 'white');
console.log(testShape);
console.log(testShape.setColor());
console.log(testShape.setColor('green'));

testCircle = new Circle('black', 'ggg', 'white');
console.log(testCircle);
console.log(testCircle.setColor());
console.log(testCircle.setColor('orange'));

module.exports = { Shape, Circle, Square, Triangle };