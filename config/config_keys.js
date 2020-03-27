const prodEnv = process.env.NODE_ENV || 'development';

if (prodEnv === 'development') {
  let configKeys = require('./keys.json')[prodEnv];

  Object.keys(configKeys).forEach(key => {
    process.env[key] = configKeys[key];
  });
}
