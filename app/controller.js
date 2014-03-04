

define(['underscore','backbone','app/view','app/model'],function(_,Backbone,view,model){
	
    console.log("app/controller");



    var self = {
    	start: function(){

    			//-----------------
    			// init UI
			    var msgViewList = new view.MessageList();
			    msgViewList.render();


    			//-----------------
    			// bindings
		        var msg_counter = 0;
			    // this is a listener on model
			    // this makes it... a controller ;-)
			    model.messages.on("add", function(message) {
			      console.log("from:"+message.get("name") + " msg:"+message.get("msg"));
			      var elem = new view.Message({model:message,id:"msg-"+msg_counter});
			      msgViewList.push(elem);
			      elem.render();
			      msg_counter++;
			    });


    			//-----------------
    			// push data in the model
			    model.messages.add([
			      new model.Message({name: "Jehan Bruggeman", msg:"excellent site de comparaison de frameworks JS: http://localhost/"}),
			      new model.Message({name: "Gary Verhaegen",  msg:"Rappel: Clojure workshop ce soir!"})
			    ]);
    	}
    };

    return self;
});