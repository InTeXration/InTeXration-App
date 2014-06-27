define([
    'marionette',
    '../../templates',
    'modules/hook/HookItemView'
], function (Marionette, templates, ItemView) {
    'use strict';

    return Marionette.CollectionView.extend({
        tagName: 'ul',
        childView: ItemView
    });
});