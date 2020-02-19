const express = require('express');
const app = express();
const Router = express.Router();

const PetController = require('../controller/PetController') // .. indica que esta no nivel anterior de pastas

Router.get('/', PetController.index);
Router.get('/add/:nome', PetController.add);
Router.get('/show', PetController.show);

module.exports = Router