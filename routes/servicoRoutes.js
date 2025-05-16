const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');

// Rota para registrar um novo serviço
router.post('/servicos', servicoController.criarServico);

module.exports = router;
