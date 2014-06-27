define([
    'app',
    'modules/plain/PlainView'
], function (App, PlainView) {
    'use strict';

    var PlainModule = App.module("PlainModule");

    PlainModule.Router = Marionette.AppRouter.extend({
        appRoutes: {
            "about" : "showAbout"
        }
    });

    PlainModule.addInitializer(function(){
        PlainModule.plainView = new PlainView();
        App.main.show(PlainModule.plainView);
    });

    PlainModule.addFinalizer(function(){
        App.main.close();
    });

    return PlainModule;
});