require.config({
  paths: {
    jquery: 'lib/zepto.min',
    underscore: 'lib/underscore-min',
    backbone: 'lib/backbone-min', 
  },
  
  shim: {
    jquery: { exports: '$' },
    underscore: { exports: '_' },
    backbone: {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

requirejs(['jquery','underscore','backbone','app/controller'],

    function($,_,Backbone,controller){
        console.log("main");
        

        // ------------ TODO ---------------
        /*
        backbone
        - test routes
        - test sync data with server (add/remove/update)

        others
          - use less for css
          - proper logging system with controllable settings
          - extract template definitions in seperate files. Use moustache, dustjs?
        */

           
        controller.start();
    });


