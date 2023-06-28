const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log(req.body);
  console.log(req.body.message.payload.headers[0]);

  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('El servidor está escuchando en el puerto 3000');
});