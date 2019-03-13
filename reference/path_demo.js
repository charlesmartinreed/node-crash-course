const path = require('path');
//console.log(__filename); //gives entire path and filename
///console.log(path.basename(__filename)); //gives us just the filename
//console.log(path.dirname(__filename)); //gives us the path without the filename, same as using __dirname itself

//console.log(path.extname(__filename)); //.js

// you can also parse the filename to create an object composed of the individual components
//console.log(path.parse(__filename));

// concat paths using join
// ../test/hello.html
//console.log(path.join(__dirname, "test", "hello.html"));
