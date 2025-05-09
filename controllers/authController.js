const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Usuário não encontrado' });

    const isMatch = await bcrypt.compare(password, user.senha);
    if (!isMatch) return res.status(401).json({ message: 'Senha incorreta' });

    res.json({ message: 'Login realizado com sucesso!', nome: user.nome });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};

exports.register = async (req, res) => {
  const { nome, email, password } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email já cadastrado' });

    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ nome, email, senha: hashed });
    await user.save();

    res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
};
