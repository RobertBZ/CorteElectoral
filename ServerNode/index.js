'use strict'
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = require('./app/app');

const http = require('http').createServer(app)
const io = require('socket.io')(http);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://greedy:123456789greedy@cluster0-8qfx6.mongodb.net/ProjectVote?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("DataBase, conexion establecida.")
        http.listen(port, () => {
            console.log(`Servidor corriendo en puerto : ${port}!`);
        });
    })
    .catch(err => console.log(err));

    const vote = io.of('/corteElectoral');

    const relaceVote = require('./app/ControllerSocket/userSocket')(vote);
    const stadisticsVote = require('./app/ControllerSocket/candidateSocket')(vote);
