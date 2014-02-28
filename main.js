require.config({
  paths: {
    jquery: 'lib/zepto.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min'
  },
  
  shim: {
    jquery: {
          exports: '$'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

requirejs(['jquery','underscore','backbone'],
    function($,_,Backbone){
        console.log("main");
        
        // TODO: test routes!
        
        var Message = Backbone.Model.extend({
          
        });
        
        var MessageView = Backbone.View.extend({
          
          tagName: "li",
          
          className: "stream-message",
          
          events: {
              //~ "click .icon":          "open",
              //~ "click .button.edit":   "openEditDialog",
              //~ "click .button.delete": "destroy"
          },
          
          initialize: function() {
            this.listenTo(this.model, "change", this.render);
          },
          
          template: _.template("<%- name %>/<%- msg %>"),
          
          render: function() {
            console.log("render");
            console.log(this.model);
            console.log(this.model.attributes);
            this.$el.html(this.template(this.model.attributes));
            return this;
          }
          
        });
        
        var MessageViewList = Backbone.View.extend({
          messages: [],
          el: '#stream-container',
          render: function(){_.invoke(this.messages, 'render');},
          push: function(view){ this.messages.push(view); this.$el.append(view.$el); }
        });
        
        var msgViewList = new MessageViewList();
        console.log($(msgViewList.el));
        
        msgViewList.render();
        
        var messages = new Backbone.Collection;
        
        var msg_counter = 0;
        messages.on("add", function(message) {
          console.log("from:"+message.get("name") + " msg:"+message.get("msg"));
          var elem = new MessageView({model:message,id:"msg-"+msg_counter});
          msgViewList.push(elem);
          elem.render();
          msg_counter++;
        });

        messages.add([
          new Message({name: "Jehan Bruggeman", msg:"excellent site de comparaison de frameworks JS: http://localhost/"}),
          new Message({name: "Gary Verhaegen",  msg:"Rappel: Clojure workshop ce soir!"})
        ]);

    });


