import { Sequelize, DataTypes } from "sequelize";
import sequelize from '../database';

const User = sequelize.define('user', {
  id: {
    type: DataTypes.STRING(50),
    autoIncrement: false,
    primaryKey: true,
    allowNull: false,
  },
  cedula: {
    type: DataTypes.STRING(11),
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  apellidos: {
    type: DataTypes.STRING,
    allowNull: false
  },

  seguro_medico: DataTypes.STRING(100),

  seguro_medico_compania: DataTypes.STRING(50),

  telefono: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  direccion: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  user_password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  user_status: {
    type: DataTypes.STRING(1),
    allowNull: false
  }
});

export default User;