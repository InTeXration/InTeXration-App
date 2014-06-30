define([
    'app',
    'modules/build/views/BuildView',
    'modules/build/BuildCollection'
], function (app, BuildView, BuildCollection) {
    'use strict';

    var buildCollection = new BuildCollection();
    var viewOptions = {
        collection: buildCollection
    };

    return {
        getAll: function(){
            var build = new BuildView(viewOptions);
            app.main.show(build);
        }
    };

});