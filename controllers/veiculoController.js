const Veiculo = require('../models/Veiculo');

exports.buscarPorCliente = async (req, res) => {
  try {
    const clienteId = req.query.cliente;
    if (!clienteId) {
      return res.status(400).json({ message: 'ID do cliente não informado' });
    }

    const veiculos = await Veiculo.find({ cliente: clienteId });
    res.json(veiculos);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar veículos', error });
  }
};

exports.criarVeiculo = async (req, res) => {
  try {
    const novo = new Veiculo(req.body);
    await novo.save();
    res.status(201).json({ message: 'Veículo cadastrado com sucesso', veiculo: novo });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao cadastrar veículo', error });
  }
};
