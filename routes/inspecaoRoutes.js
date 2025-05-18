const express = require('express');
const router = express.Router();
const inspecaoController = require('../controllers/inspecaoController');
const auth = require('../middlewares/authMiddleware');

router.post('/inspecoes', auth, inspecaoController.criarInspecao);

module.exports = router;
