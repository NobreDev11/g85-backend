const express = require('express');
const router = express.Router();
const clienteController = require('../controllers/clienteController');

router.post('/clientes', clienteController.criarCliente);
router.get('/clientes', clienteController.listarClientes);
router.get('/clientes/:id', clienteController.buscarClientePorId);

module.exports = router;

router.put('/clientes/:id', clienteController.atualizarCliente);

router.delete('/clientes/:id', clienteController.excluirCliente);
const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/clientesController');

router.get('/', clienteCtrl.listarClientes);
router.get('/:id', clienteCtrl.obterCliente);
router.post('/', clienteCtrl.criarCliente);
router.put('/:id', clienteCtrl.atualizarCliente);
router.delete('/:id', clienteCtrl.excluirCliente);

module.exports = router;
