const mongoose = require('mongoose');

const servicoSchema = new mongoose.Schema({
  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veiculo',
    required: true
  },
  km: {
    type: Number,
    required: true
  },
  imagem: {
    type: String, // base64 da foto do painel
    required: true
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Servico', servicoSchema);
