const Avaria = require('../models/Avaria');

const criarAvaria = async (req, res) => {
  try {
    const { veiculo, imagens, observacoes } = req.body;

    if (!veiculo || !imagens) {
      return res.status(400).json({ message: 'Dados incompletos para registrar avaria.' });
    }

    const novaAvaria = new Avaria({ veiculo, imagens, observacoes });
    const salva = await novaAvaria.save();

    res.status(201).json({ message: 'Avaria registrada com sucesso.', avaria: salva });
  } catch (err) {
    console.error('Erro ao registrar avaria:', err);
    res.status(500).json({ message: 'Erro ao registrar avaria.' });
  }
};

const listarAvarias = async (req, res) => {
  try {
    const avarias = await Avaria.find().populate('veiculo');
    res.status(200).json(avarias);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar avarias.' });
  }
};

module.exports = {
  criarAvaria,
  listarAvarias
};
