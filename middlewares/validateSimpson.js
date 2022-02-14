const { readFile } = require('../services/fileHandler');

const validateSimpson = async (req, res, next) => {
  const { id } = req.body;
  const simpsons = await readFile('./simpsons.json');
  const simpsonExists = simpsons.findIndex((s) => s.id == id);
  
  if(simpsonExists !== -1)
    return res.status(500).json({message: 'Não é possível cadastrar esse simpson'})

  req.simpsons = simpsons;
  next();
}

module.exports = validateSimpson;