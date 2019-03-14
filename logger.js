const EventEmitter = require('events');
const uuid = require('uuid');

class Logger extends EventEmitter {
	// when we call log, it should show a new ID with the passed message
	log(msg) {
		// call the event
		this.emit('message', { id: uuid.v4(), msg });
	}
}

module.exports = Logger;
