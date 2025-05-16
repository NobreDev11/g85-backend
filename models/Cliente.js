const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nome: String,
  email: String,
  telefone: String
});

module.exports = mongoose.model('Cliente', clienteSchema);
