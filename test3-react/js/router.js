var Backbone = require('./backbone').backbone;
var Dispatcher = require('./dispatcher/DocAppDispatcher');
var Constants = require('./constants/Constants.js');

var Router = Backbone.Router.extend({

      routes: {
        "doc/:number":    "oneDoc",
        "docs":           "docs", 
        "users":          "users", 
      },

      oneDoc: function() {},

      docs: function(id) {},

      users: function() {}

});

var router = new Router();
var isActive = Backbone.history.start(/*{pushState: true}*/);
if(isActive){
  console.log("Must trigger route event");
}

router.dispatchToken = Dispatcher.register(function(actionWrapper) {
    var action = actionWrapper.action;
    console.log("Router handling action recieved: ",action.type, actionWrapper.source); 

    if(Constants.PayloadSources.ROUTER != actionWrapper.source){
        switch(action.type){
            case Constants.ActionTypes.VIEW_ALL_DOCUMENTS:
                console.log("navigate "+"doc/");
                router.navigate("doc/",{trigger:true});
            break;
            case Constants.ActionTypes.VIEW_DOCUMENT:
                console.log("navigate "+"doc/"+action.doc.id);
                router.navigate("doc/"+action.doc.id,{trigger:true});
            break;
        }
    }

});


module.exports = router;

