import { connect } from "../database";
import * as queries from '../queries/auth';

import { User } from '../models/auth.model';

export const isRegistered = async (cedula, email) => {
    const pool = await connect();
    const [results] = await pool.query(queries.selectUser, [cedula, email]);

    if (results.length > 0)
      throw new Error("El usuario ha sido registrado anteriormente.");
  };

  export const create = async (newUser) => {
    try {
      const pool = await connect();
      return await pool.query(queries.insertUser, [
        newUser.id,
        newUser.cedula,
        newUser.nombre,
        newUser.apellidos,
        newUser.seguro_medico,
        newUser.seguro_medico_compania,
        newUser.telefono,
        newUser.direccion,
        newUser.email,
        newUser.user_password,
        newUser.user_status,
      ]);
    } catch (err) {
      throw new Error(
        "Ha ocurrido un error. Intente de nuevo o contacte su centro de salud."
      );
    }
  };

  export const userExist = async (value) => {
    const pool = await connect();
    const [row] = await pool.query(queries.exist, [value]);

    if (!row.length)
      throw new Error("Correo electrónico o contraseña incorrectos");

    return row[0];
  }