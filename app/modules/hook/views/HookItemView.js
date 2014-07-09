define([
    'marionette',
    'tpl!modules/hook/templates/hook_item.html'
], function (Marionette, template) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'tr',
        template: template
    });
});