const pingMiddleware = (req, res, next) => {
  return res.status(200).json({message: 'pong'});
}

module.exports = pingMiddleware;