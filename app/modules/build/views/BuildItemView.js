define([
    'marionette',
    'tpl!modules/build/templates/build_item.html'
], function (Marionette, template) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'div',
        template: template
    });
});