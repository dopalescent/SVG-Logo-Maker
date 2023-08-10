const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
const { Circle, Square, Triangle } = require('./lib/shapes.js');


const setShape = (shapeSubmit, shapeColor) => {
  if(shapeSubmit === 'circle') {
    const logoShape = new Circle(shapeColor);
    return logoShape;
  } else if (shapeSubmit === 'square') {
    const logoShape = new Square(shapeColor);
    return logoShape;
  } else {
    const logoShape = new Triangle(shapeColor);
    return logoShape;
  };
};


function writeToFile(textSubmit, textColor, shapeSubmit, shapeColor) {

  const logoShape = setShape(shapeSubmit, shapeColor);

  const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${logoShape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${textSubmit}</text>
</svg>
`;

  fs.writeFile('logo.svg', svgTemplate, (error) => {
    error ? console.error(error) : console.log('\n Generated logo.svg');
  });
};


function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const { textSubmit, textColor, shapeSubmit, shapeColor } = answers;
      writeToFile(textSubmit, textColor, shapeSubmit, shapeColor);
    });
};


init();
