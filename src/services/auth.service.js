import { Op } from "sequelize";
import User from "../models/auth.model";

export const isRegistered = async (cedula, email) => {
  const results = await User.findAll({
    where: {
      [Op.or]: [{ cedula: cedula }, { email: email }],
    },
  });

  if (results.length > 0) throw new Error("El usuario ha sido registrado anteriormente.");
};

export const create = async (newUser) => {
  try {
    await User.create(newUser);
  } catch (err) {
    throw new Error(
      "Ha ocurrido un error al crear el usuario. Intente de nuevo o contacte su centro de salud."
    );
  }
};

export const userExist = async (value) => {
  const results = await User.findAll({
    where: {
      email: value,
    },
  });

  if (results.length === 0) throw new Error("Correo electrónico o contraseña incorrectos");
  
  return results[0].dataValues;
};
