const mongoose = require('mongoose');

const veiculoSchema = new mongoose.Schema({
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  modelo: String,
  placa: String,
  cor: String
});

module.exports = mongoose.model('Veiculo', veiculoSchema);
