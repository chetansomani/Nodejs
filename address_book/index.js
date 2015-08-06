#!/usr/bin/env node

var Command = require('./command');

var gtArg = Command.getOperation();

if(gtArg == 'add'){
   return Command.add(handleRequest);
}
else if(gtArg == 'find'){
	return Command.find(handleRequest);
}
else{
	console.log('Wrong Command');
}

function handleRequest(err){
	if(err){
		console.log('Error!');
	}
	else{
		console.log('Ok! The Command ran successfully');
	}
}

