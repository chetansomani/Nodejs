var Command = {}

Command.getOperation = function() {
	return process.argv[2];
};

Command.getOperationData = function(){
	return process.argv[3];
};

Command.add = function(done){
	var contactList = Command.getOperationData();
	var con = require('./contact');
    var conString = con.createContact(contactList);
    con.saveContact(conString, done);
};

Command.find = function(done){
	var contactList = Command.getOperationData();
	var con = require('./contact');
	var name = con.parseName(contactList);

	con.findContacts(name, function(err, data){
		if(err){return done(err)}

		data.forEach(function(item){
			console.log(item.name, item.number);
		});

		return done(err, data);
	});
};

module.exports = Command;