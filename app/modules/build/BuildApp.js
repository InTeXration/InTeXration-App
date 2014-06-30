define([
    'app',
    'modules/build/BuildRouter'
], function (app, BuildRouter) {
    'use strict';

    var BuildModule = app.module("BuildApp");

    BuildModule.addInitializer(function(){
        app.Router = new BuildRouter();
    });

    BuildModule.addFinalizer(function(){
        //
    });

    return BuildModule;
});