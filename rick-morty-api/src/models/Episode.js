const mongoose = require('mongoose');
const { Schema } = mongoose;

const EpisodeSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    air_date: { type: String },
    episode: { type: String },
    characters: { type: Array, default: [] },
    url: { type: String },
    created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Episode', EpisodeSchema);