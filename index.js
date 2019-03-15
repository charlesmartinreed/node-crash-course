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
	// build our file path dynamically
	let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

	// grab the extension of the file, content type set based upon file type
	let extname = path.extname(filePath);

	//set initial content type
	let contentType = 'text/html';

	// check ext and set content type
	switch(extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
		case '.png':
			contentType = 'image/png';
			break;
		case '.jpg':
			contentType = 'image/jpg';
			break;
	}

	// read the file
	fs.readFile(filePath, (err, content) => {
		if(err) {
			if(err.code == 'ENOENT') {
				// page not found
				fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
					resp.writeHead(200, { 'Content-Type': 'text/html'});
					resp.end(content, 'utf8');
				})
			} else {
				// Some sort of server error
				resp.writeHead(500);
				resp.end(`Server Error: ${err.code}`);
			}
		} else {
			// success
			resp.writeHead(200, { 'Content-Type': contentType });
			resp.end(content, 'utf8');
		}
	});
});

// using the environment variable to determine the port to listen on
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
