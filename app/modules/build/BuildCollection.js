define([
    'backbone',
    'modules/build/BuildModel'
], function (Backbone, BuildModel) {
    'use strict';

    return Backbone.Collection.extend({
        model: BuildModel,
        url: 'http://intexration.com/build',
        initialize: function(){
            this.fetch();
        }
    });
});