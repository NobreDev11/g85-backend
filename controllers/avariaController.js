// controllers/avariasController.js
const Avaria = require('../models/Avaria');

exports.registrarAvaria = async (req, res) => {
  try {
    const { veiculo, imagens, observacoes } = req.body;

    if (!veiculo || !imagens) {
      return res.status(400).json({ message: 'Dados incompletos.' });
    }

    const novaAvaria = await Avaria.create({ veiculo, imagens, observacoes });
    res.status(201).json({ message: 'Avaria registrada com sucesso!', avaria: novaAvaria });
  } catch (error) {
    console.error('Erro ao registrar avaria:', error);
    res.status(500).json({ message: 'Erro interno ao salvar avaria.' });
  }
};
