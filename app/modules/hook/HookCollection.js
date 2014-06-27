define([
    'backbone',
    'modules/hook/HookModel'
], function (Backbone, Model) {
    'use strict';

    return Backbone.Collection.extend({
        model: Model,
        url: 'http://intexration.com/hook',
        initialize: function(){
            this.fetch();
        }
    });
});