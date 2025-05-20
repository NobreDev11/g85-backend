const express = require('express');
const router = express.Router();
const avariaController = require('../controllers/avariaController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/avarias', authMiddleware, avariaController.criarAvaria);
router.get('/avarias', authMiddleware, avariaController.listarAvarias);

module.exports = router;

// no final do arquivo avariaRoutes.js
// Fix commit trigger
