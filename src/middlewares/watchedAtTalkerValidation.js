const watchedAtTalkerValidation = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt } = talk;
  const regex = /^[0-9]{2}\/[0-9]{2}\/[0-9]{4}$/;
  if (watchedAt === undefined) {
    const error = {
      statusCode: 400,
      message: 'O campo "watchedAt" é obrigatório',
    };
    return next(error);
  }
  if (!watchedAt.match(regex)) {
    const error = {
      statusCode: 400,
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    };
      return next(error);
    }
      next();
  };
  
  module.exports = watchedAtTalkerValidation;