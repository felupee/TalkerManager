const fs = require('fs').promises;
const { join } = require('path');

const path = './talker.json';

const readTalkersFile = async () => {
    try {
      const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
      return JSON.parse(contentFile);
    } catch (error) {
      return null;
    }
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

  module.exports = {
    getAllTalker,
    getTalkerById,
  };