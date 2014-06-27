define([
    'marionette',
    'collections/HookCollection',
    'views/Header',
    'views/Hook',
    'views/Footer'
], function (Marionette, HookCollection, Header, Hook, Footer) {
    'use strict';

    var app = new Marionette.Application();
    var hookCollection = new HookCollection();

    var viewOptions = {
        collection: hookCollection
    };

    var header = new Header(viewOptions);
    var hook = new Hook(viewOptions);
    var footer = new Footer(viewOptions);

    app.addRegions({
        header: '#header',
        main: '#main',
        footer: '#footer'
    });

    app.addInitializer(function () {
        app.header.show(header);
        app.main.show(hook);
        app.footer.show(footer);
        hookCollection.fetch();
    });

    return window.app = app;
});