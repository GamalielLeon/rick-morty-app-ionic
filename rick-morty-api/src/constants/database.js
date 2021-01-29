const username = 'rickmortyuser';
const password = 'rickmorty';
const dbName = 'rickandmorty-db';

module.exports = {
    username,
    password,
    dbName,
    atlasURL: `mongodb+srv://${username}:${password}@cluster0.9mxhd.mongodb.net/${dbName}?retryWrites=true&w=majority`
};