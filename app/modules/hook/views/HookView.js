define([
    'marionette',
    'tpl!modules/hook/templates/hook.html',
    'modules/hook/views/HookItemView'
], function (Marionette, template, ItemView) {
    'use strict';

    return Marionette.CompositeView.extend({
        template: template,
        childView: ItemView,
        childViewContainer: 'tbody'
    });
});