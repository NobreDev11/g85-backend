const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '10mb' }));

// Rotas
const clienteRoutes = require('./routes/clienteRoutes');
const veiculoRoutes = require('./routes/veiculoRoutes');
const servicoRoutes = require('./routes/servicoRoutes');
const inspecaoRoutes = require('./routes/inspecaoRoutes');

app.use('/api', clienteRoutes);
app.use('/api', veiculoRoutes);
app.use('/api', servicoRoutes);
app.use('/api', inspecaoRoutes);

// Conexão com o MongoDB
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
