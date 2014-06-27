define([
    'backbone',
    '../models/HookModel',
], function (Backbone, Model) {
    'use strict';

    return Backbone.Collection.extend({
        model: Model,
        url: 'http://intexration.com/plain'
    });
});