const mongoose = require('mongoose');
const { DB } = require('../constants/database');
const port = process.env.port || 3000;

module.exports = app => {
    mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => {
            app.listen(port, () => {
                console.log(`Simon, estan en el puerto ${port}`);
            })
        })
        .catch(err => console.log('Nelson.', err))
}