const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization || req.headers['authorization'];
  console.log('🔒 Cabeçalho de autorização:', authHeader);

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    console.log('❌ Token ausente ou mal formatado');
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'segredo_super_secreto');
    console.log('✅ Token decodificado:', decoded);

    if (!decoded || !decoded.id) {
      console.log('❌ Token decodificado sem ID');
      return res.status(403).json({ message: 'Token inválido.' });
    }

    req.usuario = decoded;
    next();
  } catch (error) {
    console.error('🚫 Erro ao verificar token:', error.message);
    return res.status(403).json({ message: 'Token inválido ou expirado.' });
  }
};
