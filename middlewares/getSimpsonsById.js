const { readFile } = require('../services/fileHandler');

const getSimpsonsById = async (req, res, next) => {
  const { id } = req.params;
  
  const simpsons = await readFile('simpsons.json')
  
  const character = simpsons.find((s) => s.id == id)

  if(character)
    return res.status(200).json(character);
  
  return res.status(404).json({message: 'Simpson not found'});
}

module.exports = getSimpsonsById;