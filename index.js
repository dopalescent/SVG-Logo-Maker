const fs = require('fs');
const inquirer = require('inquirer');
const questions = require('./lib/questions.js');
// const { colors } = require('./lib/colors.js');
const { Circle, Square, Triangle } = require('./lib/shapes.js');


const setShape = (textSubmit, textColor, shapeSubmit, shapeColor) => {
  if(shapeSubmit === 'circle') {
    const logoShape = new Circle(shapeColor, textSubmit, textColor);
    return logoShape;
  } else if (shapeSubmit === 'square') {
    const logoShape = new Square(shapeColor, textSubmit, textColor);
    return logoShape;
  } else {
    const logoShape = new Triangle(shapeColor, textSubmit, textColor);
    return logoShape;
  };
};


function writeToFile(logoShape) {
  const svgTemplate = `
<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">
${logoShape.render()}
<text x="150" y="125" font-size="60" text-anchor="middle" fill=${this.textColor}>${this.textSubmit}</text>
</svg>
`;

  fs.writeFile('logo.svg', svgTemplate, (error) => {
    error ? console.error(error) : console.log('\n Generated logo.svg')
  });
};


function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      console.log(answers);
      const { textSubmit, textColor, shapeSubmit, shapeColor } = answers;
      console.log(textSubmit, textColor, shapeSubmit, shapeColor);
      setShape(textSubmit, textColor, shapeSubmit, shapeColor);
      console.log(logoShape);
      writeToFile(logoShape);
    });
};


init();
