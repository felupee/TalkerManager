const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./talkers');
const fieldValidation = require('./middlewares/fieldValidation');
const valuesValidation = require('./middlewares/valuesValidation');
const errorHandle = require('./middlewares/error');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionarr
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const talker = await talkers.getAllTalker();
  res.status(200).json(talker);
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const talker = await talkers.getTalkerById(Number(id));

  if (talker) return res.status(200).json(talker[0]);
  res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
});

app.post('/login', fieldValidation, valuesValidation, (req, res) => {
  const { email, password } = req.body;
  const token = talkers.postTalkerLogin(email, password);
  res.status(200).json({ token: `${token}` });
});

app.use(errorHandle);
app.listen(PORT, () => {
  console.log('Online');
});