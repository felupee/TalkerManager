const fs = require('fs').promises;
const { join } = require('path');
const jwt = require('jsonwebtoken');

const path = './talker.json';

const readTalkersFile = async () => {
    try {
      const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
      return JSON.parse(contentFile);
    } catch (error) {
      return null;
    }
  };

  const writeTalkersFile = async (talker) => {
    try {
      await fs.writeFile(join(__dirname, path), JSON.stringify(talker));
    } catch (error) {
      return null;
    }
  };

  const embaralha = (string) => {
    const charactersInOrder = string.split('');
    const shuffleArray = [];

    while (charactersInOrder.length) {
      const sorted = Math.floor(Math.random() * charactersInOrder.length);
      const sortedArray = charactersInOrder.splice(sorted, 1)[0];

      shuffleArray.push(sortedArray);
    }
    return shuffleArray.join('');
  };

  const getAllTalker = async () => {
    const talker = await readTalkersFile();
    return talker;
  };

  const getTalkerById = async (id) => {
    const talker = await readTalkersFile();
    const talkerExists = talker.some((pessoa) => pessoa.id === id);

    if (talkerExists) {
      return talker.filter((talkerr) => talkerr.id === id);
    }
    return false;
  };

  const postTalkerLogin = (email, password) => {
    const token = jwt.sign(email, password);
    const tokenEmbaralhado = embaralha(token);
    const tokenFormatado = tokenEmbaralhado.substring(0, 16);
    return tokenFormatado;
  };

  const createTalker = async (talkerRequest) => {
    const talker = await readTalkersFile();
    const pessoa = {
      id: talker[talker.length - 1].id + 1,
      ...talkerRequest,
    };
    talker.push(pessoa);
    await writeTalkersFile(talker);
    return pessoa;
  };

  module.exports = {
    getAllTalker,
    getTalkerById,
    postTalkerLogin,
    createTalker,
  };