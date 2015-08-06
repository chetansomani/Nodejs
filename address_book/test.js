/*var MyParrot = require('./parrot')

var Contact = require('./contact')

var name = Contact.parseName("John Smith,604-123-9090")

var number = Contact.parseNumber("John Smith,604-123-9090")

var contact = Contact.createContact("John Smith,604-123-9090")

Contact.loadContacts(function(err,data){
   console.log(data)
})

var contacts = [{ name: "John Smith", number : "604-123-9090"}]

Contact.saveContacts(contacts, function(err,data){
   console.log(data)
})

var contacts = { name: "John Smith", number : "604-123-9090"}

Contact.saveContact(contact, function(err,data){
   console.log('success')
   console.log(data)
})

Contact.findContacts('John', function(err,data){
   console.log(data)
})


var Command = require('./command')

Command.add(function(err){
   console.log('Contact added!');
})

Command.find(function(err, results){
   console.log('Find Complete!');
})*/

var Util = require('./util')
var home = Util.getHomeDirectory();
var path = Util.getDataPath();
console.log(home)
console.log(path)