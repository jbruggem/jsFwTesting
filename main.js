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
        
        // btw: this is horrible. Find some better way.
        // ideally: view should "plugin into" the model -- it's not 
        // the case here!
        // so, what to do better
        // - hierarchical view building
        // - hierarchical data model building
        // - binding to view to data model properly
        

        
        controller.start();
        
        
       

    });


