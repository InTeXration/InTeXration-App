define([
    'app',
    'views/Plain'
], function (app, Plain) {
    'use strict';

    return{
        plain: function(){
            var plain = new Plain();
            app.main.show(plain);
        }
    };
});