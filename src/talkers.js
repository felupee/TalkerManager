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

  const putFile = async (pessoa, id) => {
    try {
      const arrayTalkers = await readTalkersFile();
      let changedTalker;
  
      for (let i = 0; i < arrayTalkers.length; i += 1) {
        if (arrayTalkers[i].id === Number(id)) {
          arrayTalkers[i].name = pessoa.name;
          arrayTalkers[i].age = pessoa.age;
          arrayTalkers[i].talk.watchedAt = pessoa.talk.watchedAt;
          arrayTalkers[i].talk.rate = pessoa.talk.rate;
          changedTalker = arrayTalkers[i];
        }
      }
      await fs.writeFile(join(__dirname, path), JSON.stringify(arrayTalkers));
      return changedTalker;
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

  const putTalker = async (pessoa, id) => {
    const result = await putFile(pessoa, id);
    return result;
  };

  module.exports = {
    getAllTalker,
    getTalkerById,
    postTalkerLogin,
    createTalker,
    putTalker,
  };