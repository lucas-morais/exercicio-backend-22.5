const { readFile } = require('../services/fileHandler');

const getSimpsons = async (req, res, next) => {
  const simpsons = await readFile('simpsons.json')
  return res.status(200).json(simpsons);
}

module.exports = getSimpsons;