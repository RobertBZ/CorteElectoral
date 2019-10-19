'use strict'
const express = require('express');
const userController = require('../Controller/userController');

const Router = express.Router();

//Router.get('/:id', userController.getOne);
Router.post('/', userController.add);
Router.put('/:id', userController.updateVote);
Router.get('/', userController.getAll);
Router.get('/:ci', userController.login);

module.exports = Router;