module.exports = {
  HOST: "postgres",
  USER: "root",
  PASSWORD: "root",
  DB: "micorservice_db",
  dialect: "postgres",
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};