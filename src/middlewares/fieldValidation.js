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
/*   console.log(email);
  const hasPropertiesEmail = requiredPropertiesEmail.every((property) => property in email);
  const hasPropertiesPassword = requiredPassword.every((property) => property in password);
  if (!hasPropertiesEmail) {
    const error = {
      statusCode: 400,
      message: 'O campo "email" é obrigatório',
    };
    return next(error);
  }
  if (!hasPropertiesPassword) {
      const error = {
        statusCode: 400,
        message: 'O campo "password" é obrigatório',
      };
      return next(error);
    } */