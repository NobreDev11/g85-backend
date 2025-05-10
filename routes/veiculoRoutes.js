const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Buscar veículos por cliente
router.get('/veiculos', veiculoController.buscarPorCliente);

// (opcional) Rota para cadastrar novo veículo
router.post('/veiculos', veiculoController.criarVeiculo);

module.exports = router;
