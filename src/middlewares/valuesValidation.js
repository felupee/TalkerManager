const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
const valuesValidation = (req, res, next) => {
    const { email, password } = req.body;
    if (!email.match(regex)) {
      const error = {
        statusCode: 400,
        message: 'O "email" deve ter o formato "email@email.com"',
      };
      return next(error);
    }
    if (password.length < 6) {
      const error = {
        statusCode: 400,
        message: 'O "password" deve ter pelo menos 6 caracteres',
      };
      return next(error);
    }
    next();
  };
  
  module.exports = valuesValidation;