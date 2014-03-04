

define(['underscore','backbone'],function(_,Backbone){

    console.log("app/model");
    var self = {};

    self.Message = Backbone.Model.extend({
      
    });

    self.messages = new Backbone.Collection;

    return self;
});