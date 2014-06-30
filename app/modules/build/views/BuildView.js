define([
    'marionette',
    'tpl!modules/build/templates/build.tmpl',
    'modules/build/views/BuildItemView'
], function (Marionette, template, BuildItemView) {
    'use strict';

    return Marionette.CompositeView.extend({
        template: template,
        childView: BuildItemView,
        childViewContainer: 'tbody'
    });
});