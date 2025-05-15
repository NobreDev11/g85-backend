const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Buscar todos os veículos de um cliente
router.get('/veiculos', veiculoController.buscarPorCliente);

// Cadastrar um novo veículo
router.post('/veiculos', veiculoController.criarVeiculo);

module.exports = router;
