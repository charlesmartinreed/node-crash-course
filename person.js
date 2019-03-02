const person = {
	name: 'Charles Reed',
	age: 32
}

//modules are not called directly, but rather are accessed via node.js's Module Wrapper Function

//function (exports, require, module, __filename, __dirname) {

//})
console.log(__dirname, __filename);

class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`My name is ${this.name} and I am ${this.age} years old`);
	}
}

//module.exports = person;
module.exports = Person;
