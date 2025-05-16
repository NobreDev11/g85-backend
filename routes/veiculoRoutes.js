const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/veiculos', veiculoController.buscarPorCliente);
router.get('/veiculos/:id', veiculoController.buscarVeiculoPorId);
router.post('/veiculos', veiculoController.criarVeiculo);
router.put('/veiculos/:id', veiculoController.atualizarVeiculo);
router.delete('/veiculos/:id', veiculoController.excluirVeiculo);

module.exports = router;
