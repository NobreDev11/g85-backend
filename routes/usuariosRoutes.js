const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

router.post('/register', usuariosController.registrarUsuario);
router.post('/login', usuariosController.loginUsuario); // 👈 Adicionado aqui

module.exports = router;
