const express = require('express');
const router = express.Router();
const servicoController = require('../controllers/servicoController');
const auth = require('../middlewares/authMiddleware');

router.post('/servicos', auth, servicoController.criarServico);

module.exports = router;
