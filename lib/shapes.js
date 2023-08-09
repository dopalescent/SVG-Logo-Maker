const { questions } = require("./questions")

class Shape {
  svgTemplate = `<svg version="1.1"
  width="300" height="200"
  xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="white" />
  ${shapeTemplate}
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
</svg>`;

  constructor(shapeColor, textSubmit, textColor, svgTemplate) {
    this.shapeColor = shapeColor;
    this.textSubmit = textSubmit;
    this.textColor = textColor;
    this.svgTemplate = svgTemplate;
  }
}

class Circle extends Shape {
  shapeTemplate = `<>`;
  constructor(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {
    super(shapeColor, textSubmit, textColor, svgTemplate)
  };

  render(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {

  }
}

class Square extends Shape {
  shapeTemplate = `<>`;
  constructor(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {
    super(shapeColor, textSubmit, textColor, svgTemplate)
  };

  render(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {
    
  }
}

class Triangle extends Shape {
  shapeTemplate = `<>`;
  constructor(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {
    super(shapeColor, textSubmit, textColor, svgTemplate)
  };

  render(shapeColor, textSubmit, textColor, svgTemplate, shapeTemplate) {
    
  }
}