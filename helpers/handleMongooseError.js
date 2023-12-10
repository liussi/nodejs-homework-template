const hendleMongooseError = (error, data, next) => {
  const { email, code } = error;
  console.log(email)
  console.log(code)
  const status = !email && code === 11000 ? 409 : 400;
  error.status = status;
  next();
};

module.exports = hendleMongooseError;
