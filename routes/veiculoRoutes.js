const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.get('/veiculos', veiculoController.buscarPorCliente);
router.post('/veiculos', veiculoController.criarVeiculo);

module.exports = router;
