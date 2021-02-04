module.exports = {
    secret: 'api rick-morty secret string',
    iss: 'http://localhost:3000/api/',
    algorithm: 'HS256',
    expiresIn: 60 * 10,
    type: 'Bearer',
};