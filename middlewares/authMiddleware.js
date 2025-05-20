const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'segredo_super_secreto');

    if (!decoded || !decoded.id) {
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.usuario = decoded; // <- aqui é onde o perfilController vai ler
    next();
  } catch (error) {
    console.error('Erro ao verificar token:', error.message);
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};
