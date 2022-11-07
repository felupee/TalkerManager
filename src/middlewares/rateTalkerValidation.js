const rateTalkerValidation = (req, res, next) => {
  const { talk } = req.body;
  const { rate } = talk;
  if (rate === undefined) {
    const error = {
      statusCode: 400,
      message: 'O campo "rate" é obrigatório',
    };
    return next(error);
  }
  if (rate < 1 || rate > 5 || !Number.isInteger(rate)) {
    const error = {
      statusCode: 400,
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    };
    return next(error);
  }
  
  next();
  };
  
  module.exports = rateTalkerValidation;