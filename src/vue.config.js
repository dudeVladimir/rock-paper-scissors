const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  integrity: !isDev,
};
