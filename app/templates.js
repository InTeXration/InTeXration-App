/*global define */

define(function (require) {
    'use strict';

    return {
        footer: require('tpl!templates/footer.tmpl'),
        hook: require('tpl!templates/plain.tmpl'),
        plain: require('tpl!templates/plain.tmpl'),
        header: require('tpl!templates/header.tmpl')
    };
});
