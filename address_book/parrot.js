var Parrot = {}

Parrot.speakEnglish = function() {
	return 'Hello!'	
}
Parrot.speakSpanish = function(){
	return 'Ola!'
}

//Only object accessible from other modules
module.exports = Parrot


