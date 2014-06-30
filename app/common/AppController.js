define([
    'app'
], function (app) {
    'use strict';

    return{
        index: function(){
            app.main.reset();
        }
    };
});