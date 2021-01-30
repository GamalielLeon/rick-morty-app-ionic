const api = '/api';
const characters = 'characters';
const episodes = 'episodes';
const charactersRoutes = require('./characters');
const episodesRoutes = require('./episodes');

module.exports = (app) => {
    app.use((req, res, next) => {
        res.append('Access-Control-Allow-Origin', '*')
        res.append('Content-Type', 'application/json')
            // console.log('vete a la 15');
        next();
    })
    app.use(`${api}/${characters}`, charactersRoutes);
    app.use(`${api}/${episodes}`, episodesRoutes);
    app.use((req, res) => res.status(404).json({ error: 'no se encontró :c' }))
}