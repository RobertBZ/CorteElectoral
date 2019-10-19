'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    ci: { type: String, required: true, unique: true },
    fullname: { type: String, required: true },
    address: { type: String, required: true },
    stateVote: { type: Boolean, default: false },
    rol: { type: String, required: true, enum: ['votante', 'jurado'] },
    typeVote: { type: String, required: true, default: 'en espera', enum: ['nulo', 'asignado', 'en espera']}
});

module.exports = mongoose.model('user', UserSchema);