var keyMirror = require('react/lib/keyMirror');

module.exports = {
    ActionTypes: keyMirror({
        ADD_DOCUMENT: null,
        REMOVE_DOCUMENT: null,
        VIEW_DOCUMENT: null,
        VIEW_ALL_DOCUMENTS: null
    }),

    PayloadSources: keyMirror({
        SERVER: null,
        VIEW: null,
        ROUTER: null
    }),

    Views: keyMirror({
        DOC_LIST: null,
        DOC_ONE: null,
        HOME: null
    }),

    Events: keyMirror({
        CHANGE: null,
        CHANGE_VIEW: null
    }),
}