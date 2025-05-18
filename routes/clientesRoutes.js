const express = require('express');
const router = express.Router();
const clienteCtrl = require('../controllers/clientesController');
const auth = require('../middlewares/authMiddleware');

router.get('/', auth, clienteCtrl.listarClientes);
router.get('/:id', auth, clienteCtrl.obterCliente);
router.post('/', auth, clienteCtrl.criarCliente);
router.put('/:id', auth, clienteCtrl.atualizarCliente);
router.delete('/:id', auth, clienteCtrl.excluirCliente);

module.exports = router;
