const Cliente = require('../models/Cliente');

exports.criarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novoCliente = new Cliente({ nome, email, telefone });
    await novoCliente.save();
    res.status(201).json({ message: 'Cliente cadastrado com sucesso!' });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar cliente', error });
  }
};
