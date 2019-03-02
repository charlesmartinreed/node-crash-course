// ./person because it's a file, not a module

//since node doesn't yet support the ES6 import, we can't use this:
//import Person from './person';

// const person = require('./person');
const Person = require('./person');

//instantiate a Person, call the greeting
const person1 = new Person('Charles Reed', 32);
person1.greeting();
