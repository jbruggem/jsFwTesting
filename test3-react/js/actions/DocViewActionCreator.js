var Dispatcher = require('../dispatcher/DocAppDispatcher');

var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;

console.log("Building view action creator");

function event(type){
    return function(){
        Dispatcher.handleViewAction({
            type: type
        });
    }
}

function docEvent(type){
    return function(doc){
         Dispatcher.handleViewAction({
                type: type,
                doc: doc
            });
    }
}


module.exports = {

    viewDoc: docEvent(ActionTypes.VIEW_DOCUMENT),
    viewDocList: event(ActionTypes.VIEW_ALL_DOCUMENTS),
    addDoc: docEvent(ActionTypes.ADD_DOCUMENT),
    removeDoc: docEvent(ActionTypes.REMOVE_DOCUMENT),
};