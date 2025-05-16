exports.registrarUsuario = (req, res) => {
  const { nome, email, password } = req.body;

  if (!nome || !email || !password) {
    return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
  }

  res.status(201).json({
    message: 'Usuário registrado com sucesso!',
    usuario: { nome, email }
  });
};
