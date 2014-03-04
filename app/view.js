


define(['underscore','backbone'],function(_,Backbone){
    console.log("app/view");
    
    var self = {};

    self.Message = Backbone.View.extend({
      tagName: "li",
      className: "stream-message",
      events: {
          //~ "click .icon":          "open",
          //~ "click .button.edit":   "openEditDialog",
          //~ "click .button.delete": "destroy"
      },
      template: _.template('<em class="msg"><%- msg %></em> <small><%- name %></small>'),

      initialize: function() {
        this.listenTo(this.model, "change", this.render);
      },
      
      render: function() {
        console.log("render");
        console.log(this.model);
        console.log(this.model.attributes);
        this.$el.html(this.template(this.model.attributes));
        return this;
      }
    });

    self.MessageList = Backbone.View.extend({
      messages: [],
      el: '#stream-container',
      render: function(){_.invoke(this.messages, 'render');},
      push: function(view){ this.messages.push(view); this.$el.append(view.$el); }
    });
        
    //self.msgList = new MessageList();

    return self;
});