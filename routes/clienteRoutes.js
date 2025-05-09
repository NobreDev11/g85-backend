const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.criarCliente);
router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.buscarClientePorId);

module.exports = router;

router.put('/clientes/:id', clienteController.atualizarCliente);

router.delete('/clientes/:id', clienteController.excluirCliente);
