// config/db.config.js
// This file initializes Sequelize and connects to MySQL using environment variables from .env.


const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.udb,
  process.env.localhost,
  process.env.admin,
  {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql',
  }
);

module.exports = sequelize;
