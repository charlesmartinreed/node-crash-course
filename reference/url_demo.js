const url = require('url');

const myURL = new URL('http://www.mywebsite.com:8000/hello.html?id=100&status=active');

// serialize the url
console.log(myURL.href);

// get the host(root domain)
console.log(myURL.host);

// get the hostname - doesn't include port number
console.log(myURL.hostname);

// get the pathname
console.log(myURL.pathname);

// serialize the query and params
console.log(myURL.search);

// create an object from the params in our URL
console.log(myURL.searchParams);

// add params to our url
myURL.searchParams.append('abc', '123');

console.log(myURL.searchParams);

// we can also loop through
myURL.searchParams.forEach( (value, name) => console.log(`${name}: ${value}`));
