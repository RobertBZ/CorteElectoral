'use strict'
const User = require('../Schemas/user');
const Candidate = require('../Schemas/partyPolitic');

module.exports = async function (io) {
    function vote(data) {
        User.findByIdAndUpdate(data.user._id, data.user, { new: true }).then((currentUser) => {
            if (!currentUser) {
                io.emit('response-user-vote', { message: "Usuario sin votar" });
            } else {
                Candidate.updateOne({ _id: data.idcandidate }, { $inc: { quantityVote: 1 } }, { new: true }, (err, result) => {
                    if (!result) {
                        io.emit('response-user-vote', { message: "Error al contabilizar el voto" });
                    } else {
                        io.emit('response-user-vote', { message: "Voto exitoso", content: currentUser });
                    }
                });
            }
        }).catch((err) => {
            io.emit('response-user-vote', { message: err });
        });
    }

    function sendErrorMessage() {
        io.emit('response-user-vote', { message: "Error el voto no se reconocio" });
    }
    
    io.on('connection', (socket) => {
        socket.on('user-register-vote', (data) => {
            let hasCredentials = data.user._id && data.idcandidate;
            if (hasCredentials) {
                vote(data);
            } else {
                sendErrorMessage();
            }
        });
    });
};