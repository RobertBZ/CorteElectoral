'use strict'
const express = require('express');
const candidateController = require('../Controller/candidateController');

const Router = express.Router();

Router.post('/', candidateController.add);
Router.get('/', candidateController.getAll);
Router.put('/:id', candidateController.updateVote);

module.exports = Router;