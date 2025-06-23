const express = require('express');
const cors = require('cors');
const { DefaultAzureCredential } = require("@azure/identity");
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/locacao', async (req, res) => {
  const { nome, email } = req.body;

  const veiculo = {
    modelo: "Gol",
    ano: 2022,
    tempoAluguel: "1 semana",
  };

  const mensagem = {
    nome,
    email,
    ...veiculo,
    data: new Date().toISOString(),
  };

  try {
    const message = {
      body: mensagem,
      contentType: "application/json",
    };

    await sender.sendMessages(message);
    await sender.close();
    await sbClient.close();

    res.status(200).send("Locação enviada para a fila com sucesso");
  } catch (err) {
    console.error("Erro ao enviar mensagem para a fila:", err);
    res.status(500).send("Erro interno");
  }
});

app.listen(3001, () => console.log("BFF rodando na porta 3001"));
