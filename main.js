require.config({
  paths: {
    jquery: 'lib/zepto.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min', 
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

requirejs(['jquery','underscore','backbone','app/controller'],

    function($,_,Backbone,controller){
        console.log("main");
        
        // TODO: test backbone routes!
        // TODO: LESS CSS !!!!!
        // TODO: proper logging system with controllable settings

        // TODO: attach events to views
        // TODO: define attributes of model object?
        // TODO: correct mapping view/model
        // TODO: test other template system. Extract template definitions ?
           
        controller.start();
    });


