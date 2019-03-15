// const person = require('./person');
// const person = require('./person');

// COMMON JS MODULE
// const Person = require('./person');
// const person = new Person('Charles Reed', 32);
// person.greeting();

// const Logger = require('./logger');
// const logger = new Logger();
//
// logger.on('message', data => console.log('Called Listener', data))
//
// logger.log('Hello world');
// logger.log('Again, hi!');
// logger.log('Goodbye!!!');
const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, resp) => {
	// loading a file
	if(req.url === '/') {
		fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
			if(err) throw err;
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.end(content);
		 })
	}

	if(req.url === '/about') {
		fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
			if(err) throw err;
			resp.writeHead(200, {'Content-Type': 'text/html'});
			resp.end(content);
		 })
	}

	if (req.url === '/api/users') {
		const users = [
			{ name: 'Bob Smith', age: 40 },
			{ name: 'Jane Smith', age: 43 },
			{ name: 'Terrence Smith', age: 21 }
		];
		resp.writeHead(200, { 'Content-Type': 'application/json' });
		resp.end(JSON.stringify(users));
	}
});

// using the environment variable to determine the port to listen on
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
