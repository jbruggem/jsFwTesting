var Backbone = require('../backbone');
var DocServerActionCreator = require('../actions/DocServerActionCreator');
var Dispatcher = require('../dispatcher/DocAppDispatcher');

var Constants = require('../constants/Constants');
var PayloadSources = Constants.PayloadSources;
var ActionTypes = Constants.ActionTypes;



var globalIdCount=0;
function getNewId(){
    return globalIdCount++;
}

function pickExistingId(){
    return globalIdCount-Math.round(Math.random()*3);
}

var currentAction=0;
var simulatedActions = [
    function(){return { name: "addDoc",
      theDoc: {id: null, name: "ploup"}
    }},
    function(){return { name: "addDoc",
      theDoc: {id: null, name: "Flunk"}
    }},
    function(){return { name: "addDoc",
      theDoc: {id: null, name: "Glop"}
    }},
    function(){return { name: "removeDoc",
      theDoc: {id: null}
    }},
    // { name: "updateDoc",
    //   payload: { id : globalIdCount}
    // },
    // { name: "updateUser",
    //   payload: { id : globalIdCount}
    // },
]


var SimulatedServer = {
    connect: function(){
        // simulate connexion; we simulate a doc update every now and then
        var id = setInterval(function() {
            action = simulatedActions[currentAction % simulatedActions.length ]();
            if(action.name=="removeDoc")
                action.theDoc.id = pickExistingId();
            else
                action.theDoc.id = getNewId();
            // console.log("action",action);
            DocServerActionCreator[action.name](new Document(action.theDoc));
            currentAction++;
        }, 100);

        setTimeout(function(){
            clearInterval(id);
        },2000);
    }

};


SimulatedServer.dispatchToken = Dispatcher.register(function(actionWrapper) {
    var action = actionWrapper.action;
    console.log("SimulatedServer handling action recieved: ",action.type,actionWrapper.source); 

    if(PayloadSources.SERVER != actionWrapper.source){
        switch(action.type){
            case ActionTypes.REMOVE_DOCUMENT:
                setTimeout(function(){
                    console.log(action)
                    DocServerActionCreator.removeDoc(action.doc);
                },1000);
            break;
        }
    }

});

module.exports = SimulatedServer