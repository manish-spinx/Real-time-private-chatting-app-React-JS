/*
* Real time private chatting app using Angular 2, Nodejs, mongodb and Socket.io
* @author Shashank Tiwari
*/
'use strict';
//const bcrypt = require('bcrypt');

class PasswordHash{

	createHash(password) {
		return password;//bcrypt.hashSync(password, 10);
	}

	compareHash(password, hash) {
		return password;//bcrypt.compareSync(password, hash)
	}
}

module.exports = new PasswordHash();
