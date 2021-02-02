const { validationMessage } = require('../constants/functions');
const patterns = require('../constants/patterns');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { Schema } = mongoose;

const userSchema = new Schema({
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
        type: String,
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

/* This hook is triggered when a document is about to be saved.
   Here, it's needed a function in order to get the local instance of the
   document to be saved, since arrow functions does not create a 'this' scope.
*/
userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password, 11);
    next();
});

module.exports = mongoose.model('User', userSchema);