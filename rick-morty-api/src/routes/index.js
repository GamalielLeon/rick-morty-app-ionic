const { api, characters, episodes, users } = require('../constants/pathNames');
const charactersRoutes = require('./characters');
const episodesRoutes = require('./episodes');
const usersRoutes = require('./users');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
        res.append('Access-Control-Allow-Origin', '*');
        res.append('Content-Type', 'application/json');
        res.append('Cache-Control', 'no-cache');
        next();
    });
    app.use(`${api}/${characters}`, charactersRoutes);
    app.use(`${api}/${episodes}`, episodesRoutes);
    app.use(`${api}/${users}`, usersRoutes);
    app.use((req, res) => res.status(404).json({ error: 'no se encontró :c' }));
};