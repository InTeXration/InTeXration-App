define([
    'app'
], function (app) {
    'use strict';

    return{
        document: function(owner, repo, name){
            console.log(owner);
            console.log(repo);
            console.log(name);
        }
    };
});