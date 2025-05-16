// controllers/usuariosController.js

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

exports.loginUsuario = (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email e senha são obrigatórios.' });
  }

  // Simulação de login para testes (sem banco por enquanto)
  if (email === 'teste@email.com' && password === '123456') {
    return res.status(200).json({
      message: 'Login realizado com sucesso!',
      nome: 'Usuário de Teste'
    });
  }

  res.status(401).json({ message: 'Credenciais inválidas.' });
};
