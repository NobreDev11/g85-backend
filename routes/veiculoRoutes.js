const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

// Listar todos os veículos de um cliente
router.get('/veiculos', veiculoController.buscarPorCliente);

// Buscar veículo por ID
router.get('/veiculos/:id', veiculoController.buscarVeiculoPorId);

// Criar veículo
router.post('/veiculos', veiculoController.criarVeiculo);

// Atualizar veículo
router.put('/veiculos/:id', veiculoController.atualizarVeiculo);

module.exports = router;
