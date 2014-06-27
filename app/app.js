define([
    'marionette',
    'common/AppRouter',
    'common/views/Header',
    'common/views/Footer'
], function (Marionette, AppRouter, Header, Footer) {
    'use strict';

    var app = new Marionette.Application();

    var header = new Header();
    var footer = new Footer();

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function (){
        app.header.show(header);
        app.footer.show(footer);
        require([
            "modules/plain/PlainApp",
            "modules/hook/HookApp"
        ], function(){
            new AppRouter();
            Backbone.history.start({pushState: true,  root: '/'})
        });
    });

    app.startSubApp = function(appName, args){
        var currentApp = appName ? app.module(appName) : null;
        if (app.currentApp === currentApp){ return; }

        if (app.currentApp){
            app.currentApp.stop();
        }

        app.currentApp = currentApp;
        if(currentApp){
            currentApp.start(args);
        }
    };


    return window.app = app;
});