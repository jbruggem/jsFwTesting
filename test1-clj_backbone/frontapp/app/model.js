

define(['underscore','backbone'],function(_,Backbone){

    console.log("app/model");
    var self = {};

    function init(){
    	console.log("app/model build model");
    	buildModel();
    	self.messages = new self.MessageList();
    	console.log("app/model connect to server");
    	return self;
    };

    function buildModel(){

    	self.Message = Backbone.Model.extend({
    		url: "/message"
    	});
    	self.MessageList = Backbone.Collection.extend({
    		model: self.Message,
    		url: "/api/messages"
    	});

    };

    self.start = function(){
    	// plug to api for continuous updating
    	self.messages.fetch();

    };




    return init();
});