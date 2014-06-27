define([
    'app',
    '../modules/plain/PlainView'
], function (app, Plain) {
    'use strict';

    return{
        plain: function(){
            var plain = new PlainView();
            app.main.show(plain);
        }
    };
});