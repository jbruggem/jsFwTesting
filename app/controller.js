

define(['underscore','backbone','app/view','app/model'],function(_,Backbone,view,model){
	
    console.log("app/controller");

    var self = {};

    function init(){

    	return self;
    }

    self.start = function(){

      	console.log("app/controller start");
		//-----------------
		// init Router
		self.router = Backbone.Router.extend({

		  routes: {
		    "page/:number":                 "page",
		    "message/:id":                 "oneMessage", 
		  },

		  page: function(number) {
		    // view.changeCurrentPage(number)
		  },

		  oneMessage: function(msgId) {
		    // view.showOneMessage(msgId)
		  }

		});


		model.start();
    };

    return init();
});