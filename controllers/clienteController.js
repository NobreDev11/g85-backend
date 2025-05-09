const Cliente = require('../models/Cliente');

exports.criarCliente = async (req, res) => {
  try {
    const { nome, email, telefone } = req.body;
    const novoCliente = new Cliente({ nome, email, telefone });
    await novoCliente.save();
    res.status(201).json({ message: 'Cliente cadastrado com sucesso!', cliente: novoCliente });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar cliente', error });
  }
};

exports.buscarClientePorId = async (req, res) => {
  try {
    const cliente = await Cliente.findById(req.params.id);
    if (!cliente) return res.status(404).json({ message: 'Cliente não encontrado' });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar cliente', error });
  }
};

exports.listarClientes = async (req, res) => {
  try {
    const clientes = await Cliente.find();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao listar clientes', error });
  }
};
