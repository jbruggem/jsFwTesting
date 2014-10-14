var Backbone = require('backbone');
Backbone._ = require('lodash');
Backbone.$ = require('jquery');


var Model = {
    
    Document: Backbone.Model.extend({
        id: null,
        name: null,
        text: null
    }),

    Docs: Backbone.Collection.extend({
      model: Model.Document
    }),

}

module.exports = {
    backbone: Backbone,
    model: Model
};