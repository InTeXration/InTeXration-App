define([
    'marionette',
    'modules/hook/HookController'
], function (Marionette, HookController) {
    'use strict';
    return Marionette.AppRouter.extend({
        controller:HookController,
        appRoutes: {
            "hook": "getAll"
        }
    });
});