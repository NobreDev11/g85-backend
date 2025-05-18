const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');
const auth = require('../middlewares/authMiddleware');

router.get('/veiculos', auth, veiculoController.buscarPorCliente);
router.get('/veiculos/:id', auth, veiculoController.buscarVeiculoPorId);
router.post('/veiculos', auth, veiculoController.criarVeiculo);
router.put('/veiculos/:id', auth, veiculoController.atualizarVeiculo);
router.delete('/veiculos/:id', auth, veiculoController.excluirVeiculo);

module.exports = router;
