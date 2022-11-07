const ageTalkerValidation = (req, res, next) => {
    const { age } = req.body;
      if (age === undefined || age === '') {
      const error = {
          statusCode: 400,
          message: 'O campo "age" é obrigatório',
      };
            return next(error);
      }
  
      if (age < 18) {
        const error = {
          statusCode: 400,
          message: 'A pessoa palestrante deve ser maior de idade',
        };
      return next(error);
      }
  
      next();
  };
  
  module.exports = ageTalkerValidation;