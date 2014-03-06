
define(['underscore','backbone','app/model'],function(_,Backbone,model){
    console.log("app/view");
    


    var self = {};

    function init(){
      console.log("app/view declare components");
      declareComponents();
      console.log("app/view create message list");
      self.messageList = new self.MessageList({model:model.messages});

      return self;
    }

    function declareComponents(){

      // ~~~~~~~~~~~~ Message ~~~~~~~~~~~~ 
      self.Message = Backbone.View.extend({
        tagName: "blockquote",
        className: "stream-message",
        events: {
            //~ "click .icon":          "open",
        },
        template: _.template('<p><%- msg %></p> <small><%- name %></small>'),

        initialize: function() {
          console.log("app/view Message initialize");
          this.listenTo(this.model, "change", this.render);
        },
        
        render: function() {
          console.log("app/view Message render");
          console.log(this.model);
          this.$el.html(this.template(this.model.attributes));
          return this;
        }
      });

      // ~~~~~~~~~~~~ MessageList ~~~~~~~~~~~~ 
      self.MessageList = Backbone.View.extend({
        messages: [],
        el: '#stream-container',
        initialize: function() {
          console.log("app/view MessageList initialize");
          this.listenTo(this.model, "add", this.modelAdd);
          this.listenTo(this.model, "remove", this.modelRemove);
          console.log("app/view MessageList initialize done");
        },
        render: function(){
          console.log("app/view MessageList render");
          _.invoke(this.messages, 'render');
        },
        modelRemove: function(model,collection,options){
          console.log("app/view MessageList modelRemove");
          console.log(model);
          console.log(collection);
          console.log(options);
        }, 
        modelAdd: function(model,collection,options){
          console.log("app/view MessageList modelAdd");
          console.log(model);
          var elem = new self.Message({ model: model, id: "msg-"+this.messages.length });
          elem.render();
          this.messages.push(elem);
          this.$el.append(elem.$el);
        }
      });
    }

    return init();
});