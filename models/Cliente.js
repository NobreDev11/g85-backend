const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  email: { type: String },
  telefone: { type: String }
});

module.exports = mongoose.model('Cliente', clienteSchema);
