const mongoose = require('mongoose');
const { Schema } = mongoose;

const CharacterSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String },
    status: { type: String },
    species: { type: String },
    type: { type: String, default: '' },
    gender: { type: String },
    origin: { name: { type: String }, url: { type: String }, },
    location: { name: { type: String }, url: { type: String }, },
    image: { type: String },
    episode: { type: Array },
    url: { type: String },
    created: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Character', CharacterSchema);