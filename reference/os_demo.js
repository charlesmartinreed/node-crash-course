const os = require('os');

// get the curent OS
console.log(os.platform());

// CPU architecure
console.log(os.arch());

// CPU Cores
console.log(os.cpus()); //returns object with information on each core in client computer

// How much free memory?
console.log(os.freemem());

// How much memory total?
console.log(os.totalmem());

// home directory?
console.log(os.homedir());

// system uptime
console.log(os.uptime());
