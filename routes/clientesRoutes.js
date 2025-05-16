const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/clientesController');

router.get('/', clienteCtrl.listarClientes);
router.get('/:id', clienteCtrl.obterCliente);
router.post('/', clienteCtrl.criarCliente);
router.put('/:id', clienteCtrl.atualizarCliente);
router.delete('/:id', clienteCtrl.excluirCliente);

module.exports = router;
