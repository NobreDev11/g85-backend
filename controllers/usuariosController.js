const Usuario = require('../models/Usuario');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.registrarUsuario = async (req, res) => {
  const { nome, email, password } = req.body;

  if (!nome || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  try {
    const existente = await Usuario.findOne({ email });
    if (existente) {
      return res.status(409).json({ message: 'Email já cadastrado.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const novoUsuario = new Usuario({ nome, email, password: hashedPassword });
    await novoUsuario.save();

    res.status(201).json({
      message: 'Usuário registrado com sucesso!',
      usuario: { nome: novoUsuario.nome, email: novoUsuario.email }
    });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ message: 'Usuário não encontrado.' });
    }

    const senhaCorreta = await bcrypt.compare(password, usuario.password);
    if (!senhaCorreta) {
      return res.status(401).json({ message: 'Senha incorreta.' });
    }

    const token = jwt.sign(
      { id: usuario._id, nome: usuario.nome, email: usuario.email },
      process.env.JWT_SECRET || 'segredo_super_secreto',
      { expiresIn: '2h' }
    );

    res.status(200).json({
      message: 'Login realizado com sucesso!',
      token,
      nome: usuario.nome
    });
  } catch (err) {
    res.status(500).json({ message: 'Erro interno no servidor.' });
  }
};
