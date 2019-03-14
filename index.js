// const person = require('./person');
// const person = require('./person');

// COMMON JS MODULE
// const Person = require('./person');
// const person = new Person('Charles Reed', 32);
// person.greeting();

const Logger = require('./logger');
const logger = new Logger();

logger.on('message', data => console.log('Called Listener', data))

logger.log('Hello world');
logger.log('Again, hi!');
logger.log('Goodbye!!!');
