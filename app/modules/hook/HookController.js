define([
    'app',
    'modules/hook/views/HookView',
    'modules/hook/HookCollection'
], function (app, HookView, HookCollection) {
    'use strict';

    var hookCollection = new HookCollection();
    var viewOptions = {
        collection: hookCollection
    };

    return {
        getAll: function(){
            var hook = new HookView(viewOptions);
            app.main.show(hook);
        }
    };

});