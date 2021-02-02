const { atlasURL } = require('../constants/database');
const cookieParser = require('cookie-parser');
const routes = require('../routes/index');
const port = process.env.port || 3000;
const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');

module.exports = (app) => {
    mongoose.connect(atlasURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(db => app.listen(port, () => {
            console.log(`Simon, escuchando en el puerto ${port}`);
            app.use(express.json());
            app.use(cookieParser());
            app.use(morgan('dev'));
            routes(app);
        }))
        .catch(err => console.log('Nelson.', err));
};