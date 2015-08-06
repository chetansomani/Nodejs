var Contact = {}
var Util = require('./util');
var dataFile = Util.getDataPath();
    
Contact.parseName = function(str){
	 var parts = str.split(',');
	 return parts[0];
}

Contact.parseNumber = function(str){
	var parts = str.split(',');
	return parts[1];
}

Contact.createContact = function(str){
	var contact = {
		name : this.parseName(str),
		number : this.parseNumber(str)
	}

	return contact;
}

Contact.loadContacts = function(done){
    var jsonfile = require('jsonfile')
    jsonfile.readFile(dataFile, function(err,data){
        done(err,data)
    });
};

Contact.saveContacts = function(contacts, done){
	var jsonfile = require('jsonfile')
	jsonfile.writeFile(dataFile, contacts, done)
};

Contact.saveContact = function(contact, done){
	var _this = this
	this.loadContacts(function(err, contacts){
		if(err){ return done(err)}
		contacts.push(contact)
	       _this.saveContacts(contacts, done)
	});
};

Contact.findContacts = function(name, done){
        this.loadContacts(function(err, contacts){
		if(err){return done(err)}

		var filterContacts = contacts.filter(function(val){
                     if(val.name == name){
                         return true;
		     }else{
		         return false;
		     }
		});
		
	       return done(err, filterContacts); 		
	});
};

module.exports = Contact;