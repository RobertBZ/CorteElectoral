'use strict'
const User = require('../Schemas/user');

function add(req, res) {
    const newuser = new User({
        ci: req.body.ci,
        fullname: req.body.fullname,
        address: req.body.address,
        rol: req.body.rol,
    });

    User.findOne({ ci : req.body.ci }, (err, data) => {
        if (data) {
            return res.status(400).send({ message: 'Ya existe un votante con este ci' });
        }
        newuser.save().then((data) => {
            if (!data) {
                res.status(404).send({ message: "Error al guardar" })
            } else {
                res.status(200).send({ message: "Guardado", content: data })
            }
        }).catch((err) => {
            res.status(500).send({ message: err })
        })
    })
}

function updateVote(req, res) {
    const id = req.params.id;

    User.findOne({ ci: req.body.ci }, (err, data) => {
        if (data) {
            return res.status(400).send({ message: "Ya existe un usuario con ese CI, imposible actualizar" });
        }
        User.findByIdAndUpdate(id, req.body, { new: true }).then((data) => {
            if (!data) {
                res.status(404).send({ message: "Error al actualizar" })
            } else {
                res.status(200).send({ message: "Actualizado", content: data })
            }
        }).catch((err) => {
            res.status(500).send({ message: err })
        })
    });
}

function getOne(req, res) {
    const id = req.params.id;
    User.findOne({ "_id": id }).then((data) => {
        if (!data) {
            res.status(404).send({ message: "No existe ese registro" })
        } else {
            res.status(200).send({ message: "Obtenido", content: data });
        }
    }).catch((err) => {
        res.status(500).send({ message: err })
    })
}

function getAll(req, res) {
    User.find().then((list) => {
        if (!list) {
            res.status(404).send({ message: "Error al mostrar" })
        } else {
            res.status(200).send({ message: "Obtenido", content: list,});
        }
    }).catch((err) => {
        res.status(500).send({ message: err })
    })
}

function login(req, res) {
    const ci = req.params.ci;
    console.log(ci);
    User.findOne({ ci: ci }).then((data) => {
        if (!data) {
            res.status(404).send({ message: "No existe ese registro" })
        } else {
            res.status(200).send({ message: "Obtenido", content: data });
        }
    }).catch((err) => {
        res.status(500).send({ message: err })
    })
}

module.exports = { add, updateVote, getOne, getAll, login };