const { validationMessage } = require('../constants/functions');
const patterns = require('../constants/patterns');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    id: {
        trim: true,
        type: Number,
        unique: true,
        cast: validationMessage('cast', 'id', 'number'),
        required: [true, validationMessage('required', 'id')],
        validate: [v => v > 0 && Number.isInteger(v), validationMessage('positiveInteger', 'id', 'number')]
    },
    firstName: {
        trim: true,
        type: String,
        required: [true, validationMessage('required', 'firstName')],
        validate: [patterns.NAME_PATTERN, validationMessage('pattern', 'firstName')]
    },
    lastName: {
        trim: true,
        type: String,
        required: [true, validationMessage('required', 'lastName')],
        validate: [patterns.NAME_PATTERN, validationMessage('pattern', 'lastName')]
    },
    email: {
        trim: true,
        type: String,
        unique: true,
        required: [true, validationMessage('required', 'email')],
        validate: [patterns.EMAIL_PATTERN, validationMessage('pattern', 'email')]
    },
    phone: {
        trim: true,
        type: Number,
        cast: validationMessage('cast', 'phone', 'number'),
        required: [true, validationMessage('required', 'phone')],
        validate: [patterns.PHONE_PATTERN, validationMessage('pattern', 'phone')]
    },
    password: {
        trim: true,
        type: String,
        required: [true, validationMessage('required', 'password')],
        validate: [patterns.PASSWORD_PATTERN, validationMessage('pattern', 'password')]
    },
    favorites: {
        type: [String],
        default: []
    }
});

module.exports = mongoose.model('User', UserSchema);