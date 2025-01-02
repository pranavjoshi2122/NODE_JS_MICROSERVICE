const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  dbConfig?.DB,
  dbConfig?.USER,
  dbConfig?.PASSWORD,
  {
    host: dbConfig?.HOST,
    port: dbConfig?.port,
    dialect: dbConfig?.dialect,
    logging: true,
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require("./user.model.js")(sequelize, Sequelize);

module.exports = db;
