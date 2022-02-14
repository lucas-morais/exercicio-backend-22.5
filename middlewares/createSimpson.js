const { readFile, writeFile } = require('../services/fileHandler')

const createSimpson = async (req, res, next) => {
  const { id, name } = req.body;
  const { simpsons } = req;
   const newSimpson = { id, name };
  
  await writeFile('simpsons.json', [...simpsons, newSimpson]);
  return res.status(201).json({message: 'Simpson criado com sucesso'});
}

module.exports = createSimpson