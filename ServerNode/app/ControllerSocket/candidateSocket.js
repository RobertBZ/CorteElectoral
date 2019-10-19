'use strict'
const Candidate = require('../Schemas/partyPolitic');

module.exports = async function (io) {
    io.on('connection', (socket) => {
        socket.on('candidate-stadistics', (data) => {
            console.log(data);
            Candidate.find({}).then((data) => {
                if (!data) {
                    io.emit('response-candidate-vote', { message: "No existen candidatos en la base de datos" })
                } else {
                    io.emit('response-candidate-vote', { message: "Estadisticas actuales", content: data })
                }
            }).catch((err) => {
                io.emit('response-candidate-vote', { message: "Error en el Servicio de estadisticas", content: err })
            })
        });
    });
};
