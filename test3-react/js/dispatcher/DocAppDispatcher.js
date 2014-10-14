var Constants = require('../constants/Constants');
var Dispatcher = require('flux').Dispatcher;
var copyProperties = require('react/lib/copyProperties');
var PayloadSources = Constants.PayloadSources;

console.log("Building  dispatcher");

var DocAppDispatcher = copyProperties(new Dispatcher(), {

    /**
    * @param {object} action The details of the action, including the action's
    * type and additional data coming from the server.
    */
    handleServerAction: function(action) {
        //console.log("handleServerAction");

        var payload = {
            source: PayloadSources.SERVER,
            action: action
        };
        this.dispatch(payload);
    },

    /**
    * @param {object} action The details of the action, including the action's
    * type and additional data coming from the view.
    */
    handleViewAction: function(action) {
        //console.log("handleViewAction");
        var payload = {
            source: PayloadSources.VIEW,
            action: action
        };
        this.dispatch(payload);
    }


    
    
});

module.exports = DocAppDispatcher;