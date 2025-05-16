const mongoose = require('mongoose');

const inspecaoSchema = new mongoose.Schema({
  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veiculo',
    required: true
  },
  itens: {
    type: [String],
    required: true
  },
  observacao: {
    type: String,
    default: ''
  },
  data: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Inspecao', inspecaoSchema);
