define([
    'marionette',
    'templates',
    'views/HookItem'
], function (Marionette, templates, ItemView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: ItemView
    });
});