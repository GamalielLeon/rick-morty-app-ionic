module.exports = {
    name: 'apiToken',
    secret: 'api rick-morty secret string',
    algorithm: 'HS256',
    expiresIn: 60 * 10,
    httpOnly: true
};