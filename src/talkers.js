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

  module.exports = {
    getAllTalker,
  };