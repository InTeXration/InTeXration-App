define([
    'marionette',
    'common/views/Header',
    'common/views/Footer',
    'nprogress'
], function (Marionette, Header, Footer, NProgress) {
    'use strict';

    var app = new Marionette.Application();

    var header = new Header();
    var footer = new Footer();

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function (){
        NProgress.start();
        app.header.show(header);
        app.footer.show(footer);
        require([
            'common/AppRouter',
            'modules/hook/HookApp',
            'modules/build/BuildApp'
        ], function(AppRouter){
            new AppRouter();
            Backbone.history.start({pushState: false,  root: '/'});
            NProgress.done();
        });
    });

    return window.app = app;
});