import Sequelize from 'sequelize';

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
  host: 'localhost',
  dialect: 'mysql',
  
});

export default sequelize;



// import mysql from "mysql2/promise";
// import { config } from "./config";

// export const connect = async () => {
//   return await mysql.createConnection(config);
// };