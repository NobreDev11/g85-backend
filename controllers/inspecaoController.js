const Inspecao = require('../models/Inspecao');

exports.criarInspecao = async (req, res) => {
  try {
    const { veiculo, itens, observacao } = req.body;

    if (!veiculo || !Array.isArray(itens)) {
      return res.status(400).json({ message: 'Dados da inspeção inválidos.' });
    }

    const novaInspecao = new Inspecao({ veiculo, itens, observacao });
    await novaInspecao.save();

    res.status(201).json({ message: 'Inspeção salva com sucesso.', inspecao: novaInspecao });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao salvar inspeção.', error });
  }
};
