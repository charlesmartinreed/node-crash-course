const fs = require('fs');
const path = require('path');

// How to create a folder
// mkdir is async, but there's an sync version available as well

//notice the callback here as we're using the async implementaton of path's mkdir

// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
// 	if(err) throw err;
// 	console.log('Folder created...');
// });

// How to create a FILE
// open will create file
// writefile will allow you to write to it immediately and save it.
// takes location of file to create, the file that should be created, what should be written to the file and callback
// fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World', err => {
// 	if (err) throw err;
// 	console.log('File was created');
//
// 	fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), '\nI love node.js', err => {
// 		if (err) throw err;
// 		console.log('File written to...');
// 	})
// })

// What if we want to write to a pre-existing file? Use appendFile

// Reading a file from a path
// without the encoding type passed in as a parameter, we wouldn't be able to properly utiilize the data obtained during our readFile operation
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
	if (err) throw err;
	// console.log(data);
});

// RENAMING A FILE

fs.rename(
	path.join(__dirname, '/test', 'hello.txt'),
	path.join(__dirname, '/test', 'helloworld.txt'),
	err => {
	if (err) throw err;
	console.log('File was renamed...');
});
