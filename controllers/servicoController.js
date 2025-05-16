const Servico = require('../models/Servico');

exports.criarServico = async (req, res) => {
  try {
    const { veiculo, km, imagem } = req.body;

    if (!veiculo || !km || !imagem) {
      return res.status(400).json({ message: 'Campos obrigatórios ausentes' });
    }

    const novoServico = new Servico({ veiculo, km, imagem });
    await novoServico.save();

    res.status(201).json({ message: 'Serviço registrado com sucesso', servico: novoServico });
  } catch (error) {
    res.status(500).json({ message: 'Erro ao registrar serviço', error });
  }
};
