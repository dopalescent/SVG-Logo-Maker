// const inquirer = require("inquirer");
// const fs = require('fs');
const { colors } = require("./colors");
const { shapes } = require("./shapes");


const questions = [
  {
    type: 'input',
    name: 'textSubmit',
    message: 'Enter up to three characters of text for your logo:',
    validate: (input) => {
      return input.length <=3 ? true 
      : console.error("\n Entry exceeds three character maximum.")},
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color as keyword (i.e. blue) or hexadecimal code (i.e. #0000ff):',
    validate: (input) => {
      const testInput = input.toLowerCase();
      return colors.includes(testInput) ? true
        : /^#[a-f\d]{6}$/.test(testInput) ? true
        : console.error("\n Invalid color entry format.")
    }
  },
  {
    type: 'list',
    name: 'shapeSubmit',
    message: 'Choose a shape for your logo:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color as keyword (i.e. blue) or hexadecimal code (i.e. #0000ff):',
    validate: (input) => {
      const testInput = input.toLowerCase();
      return colors.includes(testInput) ? true
        : /^#[a-f\d]{6}$/.test(testInput) ? true
        : console.error("\n Invalid color entry format.")
    }
  },
]

// function test() {
//   inquirer
//     .prompt(questions)
//     .then((answers) => console.log(answers));
// };

// test();

module.exports = questions;