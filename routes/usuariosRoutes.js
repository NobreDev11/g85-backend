const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');
const authMiddleware = require('../middlewares/authMiddleware');

// Público
router.post('/register', usuariosController.registrarUsuario);
router.post('/login', usuariosController.login);

// Protegido
router.get('/perfil', authMiddleware, usuariosController.perfilUsuario);

module.exports = router;
