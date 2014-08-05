define([
    'app',
    'common/views/IndexView',
], function (app, IndexView) {
    'use strict';

    return{
        index: function(){
            app.main.reset();

            var indexView = new IndexView();
            app.main.show(indexView);
        }
    };
});