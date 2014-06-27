define([
    'marionette',
    '../../templates'
], function (Marionette, templates) {
    'use strict';

    return Marionette.ItemView.extend({
        tagName: 'li',
        template: templates.hook
    });
});