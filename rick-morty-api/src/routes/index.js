const { api, characters, episodes, users, token } = require('../constants/pathNames');
const charactersRoutes = require('./characters');
const episodesRoutes = require('./episodes');
const tokenRoutes = require('./authJwt');
const usersRoutes = require('./users');

module.exports = (app) => {
    // Set initial headers
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, Authorization');
        res.append('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        // res.append('Set-Cookie', 'token=auth; HttpOnly; Max-Age=600');
        res.append('Access-Control-Allow-Credentials', 'true');
        res.append('Access-Control-Allow-Origin', '*');
        res.append('Content-Type', 'application/json');
        next();
    });
    // Endpoints
    app.use(`${api}/${token}`, tokenRoutes);
    app.use(`${api}/${users}`, usersRoutes);
    app.use(`${api}/${episodes}`, episodesRoutes);
    app.use(`${api}/${characters}`, charactersRoutes);
    // If no endpoint is found
    app.use((req, res) => res.status(404).json({ error: 'The resource was not found or does not exist' }));
};