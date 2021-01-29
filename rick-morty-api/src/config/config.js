const { atlasURL } = require('../constants/database');
const mongoose = require('mongoose');
const port = process.env.port || 3000;

module.exports = app => {
    mongoose.connect(atlasURL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(db => app.listen(port, () => {
            console.log(`Simon, escuchando en el puerto ${port}`);
        }))
        .catch(err => console.log('Nelson.', err));
};