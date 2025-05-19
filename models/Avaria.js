const mongoose = require('mongoose');

const AvariaSchema = new mongoose.Schema({
  veiculo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Veiculo',
    required: true
  },
  imagens: {
    frente: String,
    direito: String,
    esquerdo: String,
    traseira: String,
    topo: String
  },
  observacoes: {
    frente: String,
    direito: String,
    esquerdo: String,
    traseira: String,
    topo: String
  },
  criadoEm: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Avaria', AvariaSchema);
