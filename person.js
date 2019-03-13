// const person = {
// 	name: 'Charles Reed',
// 	age: 32
// }

//module wrapper function
//(function (exports, require, module, __filename, __dirname))


class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	greeting() {
		console.log(`Hi! My name is ${this.name}! \nThough I may look young for my age, I assure you that I am actually ${this.age} years old!`);
	}
}

module.exports = Person;
