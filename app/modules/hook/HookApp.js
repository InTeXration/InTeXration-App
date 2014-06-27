define([
    'app',
    'modules/hook/HookRouter'
], function (app, HookRouter) {
    'use strict';

    var HookModule = app.module("HookApp");

    HookModule.addInitializer(function(){
        app.Router = new HookRouter();
    });

    HookModule.addFinalizer(function(){
        //
    });

    return HookModule;
});