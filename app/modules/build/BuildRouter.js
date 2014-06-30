define([
    'marionette',
    'modules/build/BuildController'
], function (Marionette, BuildController) {
    'use strict';
    return Marionette.AppRouter.extend({
        controller:BuildController,
        appRoutes: {
            "build": "getAll"
        }
    });
});