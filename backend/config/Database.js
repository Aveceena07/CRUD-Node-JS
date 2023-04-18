import { Sequelize } from "sequelize";

const db = new Sequelize("mini_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
