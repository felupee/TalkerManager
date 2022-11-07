const fieldValidation = (req, res, next) => {
    const { email, password } = req.body;
    if (email === undefined) {
    const error = {
        statusCode: 400,
        message: 'O campo "email" é obrigatório',
    };
          return next(error);
    }

    if (password === undefined) {
        const error = {
            statusCode: 400,
            message: 'O campo "password" é obrigatório',
        };
              return next(error);
        }

    next();
  };
  
  module.exports = fieldValidation;
