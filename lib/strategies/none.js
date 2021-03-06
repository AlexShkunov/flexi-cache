
// ## dependencies
var log = require('debug')('lean-cache');

// ## export
module.exports = function(options, argStorage){
	
	// initialize
	var _this = this;
	this.options = options;
	var storage = argStorage;
	
	this.set = function(key, obj){
		
		log('none.set - start - count = %s | max_size = %s', 
			storage.count, this.options.size);
		
		if(storage.count >= this.options.size){
			return false; //deny
		}
		
		// add to Tail
		storage.add(key, obj);
		return true;
	};
	
	this.get = function(key){
		return storage.get(key);
	};
	
	/// this.cleanup - not defined
	/// deafult in index.js is used then
	
};


