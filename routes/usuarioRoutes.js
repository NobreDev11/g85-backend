const express = require('express');
const router = express.Router();

// Rota de teste (pode ser substituída depois)
router.get('/usuarios', (req, res) => {
  res.json({ message: 'Rota de usuários funcionando.' });
});

module.exports = router;
