const express = require("express")
const session = require('express-session');

module.exports = function({app, db, env}) {
    app.set('trust proxy', 1)
    app.use(express.static('static'))
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(express.json());
    app.use(session({
        secret: env.SECRET,
        saveUninitialized: false,
        resave: false
    }));
}