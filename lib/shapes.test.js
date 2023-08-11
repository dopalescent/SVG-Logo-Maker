const { Circle, Square, Triangle } = require('./shapes.js');

describe('Circle', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a circle', () => {
      const shape = new Circle();
      shape.setColor("green");
      expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="green" />');
    });
  });
});

describe('Square', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a square', () => {
      const shape = new Square();
      shape.setColor("red");
      expect(shape.render()).toEqual('<rect x="50" y="0" width="200" height="200" fill="red" />');
    });
  });
});

describe('Triangle', () => {
  describe('render', () => {
    it('should return a line of svg code describing dimensions of a triangle', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    });
  });
});