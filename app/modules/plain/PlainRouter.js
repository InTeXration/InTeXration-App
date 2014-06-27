define([
    'marionette',
    'modules/plain/PlainController'
], function (Marionette, PlainController) {
    'use strict';
    return Marionette.AppRouter.extend({
        controller:PlainController,
        appRoutes: {
            "plain": "plain"
        }
    });
});