define([
    'app',
    'modules/plain/PlainRouter'
], function (app, PlainRouter) {
    'use strict';

    var PlainModule = app.module("PlainApp");

    PlainModule.addInitializer(function(){
        app.Router = new PlainRouter();
    });

    PlainModule.addFinalizer(function(){
        //
    });

    return PlainModule;
});