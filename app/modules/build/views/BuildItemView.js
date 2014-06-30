define([
    'marionette',
    'tpl!modules/build/templates/build_item.tmpl'
], function (Marionette, template) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'tr',
        template: template
    });
});