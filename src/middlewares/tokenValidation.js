const tokenValidation = (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization === undefined) {
    const error = {
        statusCode: 401,
        message: 'Token não encontrado',
    };
          return next(error);
    }
    if (typeof authorization !== 'string' || authorization.length < 16) {
      const error = {
        statusCode: 401,
        message: 'Token inválido',
    };
          return next(error);
    }

    next();
  };

  module.exports = tokenValidation;
