const validateNameSimpson = (req, res, next) => {
  const { name } = req.body;

  if(!name)
    return res.status(500).json({message: 'Nome é obrigatório'}); 

  next();
}

module.exports = validateNameSimpson;