const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

const clienteRoutes = require('./routes/clienteRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const servicoRoutes = require('./routes/servicoRoutes'); // ⬅️ Adiciona aqui

app.use('/api', clienteRoutes);
app.use('/api', veiculoRoutes);
app.use('/api', servicoRoutes); // ⬅️ E aqui também

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB conectado');
  app.listen(5000, () => {
    console.log('Servidor rodando na porta 5000');
  });
}).catch((error) => {
  console.error('Erro ao conectar no MongoDB:', error);
});
