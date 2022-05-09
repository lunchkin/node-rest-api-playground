require('dotenv').config();
require('dotenv-defaults').config();

module.exports = {
    env_environment: process.env.ENVIRONMENT,
    env_port: process.env.PORT,
    env_development: 'development',
    env_production: 'production',
};