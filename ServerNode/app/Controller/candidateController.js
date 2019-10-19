'use strict'
const Candidate = require('../Schemas/partyPolitic');

function add(req, res) {
    const newCandidate = new Candidate({
        president : {
            fullname: req.body.president.fullname,
            photo: req.body.president.photo
        },
        vicePresidente : {
            fullname: req.body.vicePresidente.fullname,
            photo: req.body.vicePresidente.photo
        },
        color : req.body.color,
        politicName: req.body.politicName
    });

    newCandidate.save().then((data) => {
        if (!data) {
            res.status(404).send({ message: "Error al guardar" })
        } else {
            res.status(200).send({ message: "Guardado", content: data })
        }
    }).catch((err) => {
        res.status(500).send({ message: err })
    })
}

function getAll(req, res) {
    Candidate.find().then((list) => {
        if (!list) {
            res.status(404).send({ message: "Error al mostrar" })
        } else {
            res.status(200).send({ message: "Obtenido", content: list,});
        }
    }).catch((err) => {
        res.status(500).send({ message: err })
    })
}

function updateVote(req, res) {
    const id = req.params.id;

    Candidate.updateOne({ _id: id }, { $inc: { quantityVote: 1 } }, { new: true }, (err, result) => {
        if (!result) {
            console.log(result);
            res.status(404).send({ message: "Error al actualizar" })
        } else {
            res.status(200).send({ message: "Actualizado" })
        }
    });
}

module.exports = { add, getAll, updateVote };