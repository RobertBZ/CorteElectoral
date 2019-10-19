'use strict'
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PartyPoliticSchema = new Schema({
    president: {
        fullname: { type: String, require: true },
        photo: { type: String, required: true },
    },
    vicePresidente: {
        fullname: { type: String, require: true },
        photo: { type: String, required: true },
    },
    color : { type : String, required: true },
    quantityVote: { type: Number, default: 0 },
    politicName: { type: String, required: true }
});

module.exports = mongoose.model('partyPolitic', PartyPoliticSchema);