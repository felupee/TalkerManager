const express = require('express');
const bodyParser = require('body-parser');
const talkers = require('./talkers');
const fieldValidation = require('./middlewares/fieldValidation');
const valuesValidation = require('./middlewares/valuesValidation');
const ageTalkerValidation = require('./middlewares/ageTalkerValidation');
const nameTalkerValidation = require('./middlewares/nameTalkerValidation');
const rateTalkerValidation = require('./middlewares/rateTalkerValidation');
const tokenValidation = require('./middlewares/tokenValidation');
const watchedAtTalkerValidation = require('./middlewares/watchedAtTalkerValidation');
const talkTalkerValidation = require('./middlewares/talkTalkerValidation');

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

app.post('/talker',
  tokenValidation,
  nameTalkerValidation,
  ageTalkerValidation,
  talkTalkerValidation,
  watchedAtTalkerValidation,
  rateTalkerValidation,
  async (req, res) => {
  const { name, age, talk } = req.body;
  const newTalker = await talkers.createTalker({ name, age, talk });
  res.status(201).send(newTalker);
});

app.put('/talker/:id',
  tokenValidation,
  nameTalkerValidation,
  ageTalkerValidation,
  talkTalkerValidation,
  watchedAtTalkerValidation,
  rateTalkerValidation,
  async (req, res) => {
  const { id } = req.params;
  const pessoa = {
    ...req.body,
  };
  const changedTalker = await talkers.putTalker(pessoa, id);
  res.status(200).send(changedTalker);
});

app.delete('/talker/:id', tokenValidation, async (req, res) => {
  const { id } = req.params;
  await talkers.deleteTalker(id);
  res.status(204).end();
});

app.use(errorHandle);
app.listen(PORT, () => {
  console.log('Online');
});