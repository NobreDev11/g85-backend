const express = require('express');
const router = express.Router();
const inspecaoController = require('../controllers/inspecaoController');

router.post('/inspecoes', inspecaoController.criarInspecao);

module.exports = router;
