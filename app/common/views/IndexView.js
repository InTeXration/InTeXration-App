define([
    'marionette',
    'tpl!templates/index.html'
], function (Marionette, template) {
    'use strict';

    return Marionette.ItemView.extend({
        template: template
    });
});