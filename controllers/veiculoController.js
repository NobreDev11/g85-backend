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

exports.buscarVeiculoPorId = async (req, res) => {
  try {
    const veiculo = await Veiculo.findById(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.json(veiculo);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar veículo', error });
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

exports.atualizarVeiculo = async (req, res) => {
  try {
    const veiculo = await Veiculo.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!veiculo) {
      return res.status(404).json({ message: 'Veículo não encontrado' });
    }
    res.json({ message: 'Veículo atualizado com sucesso', veiculo });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao atualizar veículo', error });
  }
};
