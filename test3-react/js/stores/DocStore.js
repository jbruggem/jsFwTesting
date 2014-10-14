var Dispatcher = require('../dispatcher/DocAppDispatcher');
var Constants = require('../constants/Constants');

var EventEmitter = require('events').EventEmitter;
var ActionTypes = Constants.ActionTypes;
var merge = require('react/lib/merge');

var Model = require('../backbone').model;

var _docs = new Model.Docs();
var _view = { 
    type: Constants.Views.HOME,
    data: null
};

var CHANGE_EVENT = Constants.Events.CHANGE;
var CHANGE_VIEW_EVENT = Constants.Events.CHANGE_VIEW;
var PayloadSources = Constants.PayloadSources;

console.log("Building store");

var DocStore = merge(EventEmitter.prototype, {

    init: function(){
        console.log('Init doc store');
    },

    emitChange: function(event) {
        this.emit(event ? event : CHANGE_EVENT);
    },
    
    addChangeListener: function(event,callback) {
        if(!callback){
            callback = event;
            event = CHANGE_EVENT;
        }
        this.on(event, callback);
    },

    removeChangeListener: function(event,callback) {
        if(!callback){
            callback = event;
            event = CHANGE_EVENT;
        }
        this.removeListener(CHANGE_EVENT, callback);
    },

    getCurrentView: function(){
        return _view;
    },

    getAll: function(){
        //console.log("getAll:", _docs);
        return _docs;
    },

    get: function(id){
        return _docs[id];
    }

});


DocStore.dispatchToken = Dispatcher.register(function(actionWrapper) {
    var action = actionWrapper.action;
    
    console.log("DocStore handling action recieved: ",action.type,actionWrapper.source);
    console.log(actionWrapper);

    switch(action.type) {
        case ActionTypes.VIEW_ALL_DOCUMENTS:
            console.log("DocStore VIEW_ALL_DOCUMENTS");
            _view = { 
                type: Constants.Views.DOC_LIST,
                data: null
            };
            DocStore.emitChange(CHANGE_VIEW_EVENT);
        break;
        case ActionTypes.VIEW_DOCUMENT:
            console.log("DocStore VIEW_DOCUMENT");
            _view = { 
                type: Constants.Views.DOC_ONE,
                data: action.doc
            };
            DocStore.emitChange(CHANGE_VIEW_EVENT);
        break;

        case ActionTypes.ADD_DOCUMENT:
            _docs[action.doc.id] = action.doc;
            DocStore.emitChange(CHANGE_EVENT);
        break;

        case ActionTypes.REMOVE_DOCUMENT:
            if(PayloadSources.SERVER == actionWrapper.source){
                delete _docs[action.doc.id];
            }else{
                _docs[action.doc.id].deletePending = true;
            }
            DocStore.emitChange(CHANGE_EVENT);
        break;
    }

});

module.exports = DocStore;