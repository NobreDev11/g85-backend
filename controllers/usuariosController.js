const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const usuarios = []; // Armazenamento temporário em memória

exports.registrarUsuario = async (req, res) => {
  const { nome, email, password } = req.body;

  if (!nome || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  const existente = usuarios.find(user => user.email === email);
  if (existente) {
    return res.status(409).json({ message: 'Email já cadastrado.' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const novoUsuario = {
    id: usuarios.length + 1,
    nome,
    email,
    password: hashedPassword
  };

  usuarios.push(novoUsuario);

  res.status(201).json({
    message: 'Usuário registrado com sucesso!',
    usuario: { nome: novoUsuario.nome, email: novoUsuario.email }
  });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const usuario = usuarios.find(u => u.email === email);
  if (!usuario) {
    return res.status(404).json({ message: 'Usuário não encontrado.' });
  }

  const senhaCorreta = await bcrypt.compare(password, usuario.password);
  if (!senhaCorreta) {
    return res.status(401).json({ message: 'Senha incorreta.' });
  }

  const token = jwt.sign(
    { id: usuario.id, nome: usuario.nome, email: usuario.email },
    process.env.JWT_SECRET || 'segredo_super_secreto',
    { expiresIn: '2h' }
  );

  res.status(200).json({
    message: 'Login realizado com sucesso!',
    token,
    nome: usuario.nome
  });
};
