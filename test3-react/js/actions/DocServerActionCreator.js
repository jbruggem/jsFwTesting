
var Dispatcher = require('../dispatcher/DocAppDispatcher');

var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;

console.log("Building server action creator");
module.exports = {

    addDoc: function(doc) {
        //console.log("ServerAction.removeDoc:",doc);
            Dispatcher.handleServerAction({
                type: ActionTypes.ADD_DOCUMENT,
                doc: doc
            });
    },

    removeDoc: function(doc) {
        //console.log("ServerAction.removeDoc:",doc);
            Dispatcher.handleServerAction({
                type: ActionTypes.REMOVE_DOCUMENT,
                doc: doc
            });
    },
};