const talkTalkerValidation = (req, res, next) => {
  const { talk } = req.body;
    if (talk === undefined) {
      const error = {
        statusCode: 400,
        message: 'O campo "talk" é obrigatório',
    };
    return next(error);
    }
  
    next();
  };
  
  module.exports = talkTalkerValidation;