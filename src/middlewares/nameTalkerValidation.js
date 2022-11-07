const nameTalkerValidation = (req, res, next) => {
  const { name } = req.body;
    if (name === undefined) {
    const error = {
        statusCode: 400,
        message: 'O campo "name" é obrigatório',
    };
          return next(error);
    }

    if (name.length < 3) {
      const error = {
        statusCode: 400,
        message: 'O "name" deve ter pelo menos 3 caracteres',
      };
    return next(error);
    }

    next();
};

module.exports = nameTalkerValidation;