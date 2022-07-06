import { connect } from "../database";
import * as queries from "../queries/user";

export class User {
  constructor(user) {
    (this.id = user.id),
      (this.cedula = user.cedula),
      (this.nombre = user.nombre),
      (this.apellidos = user.apellidos),
      (this.seguro_medico = user.seguro_medico),
      (this.seguro_medico_compania = user.seguro_medico_compania),
      (this.telefono = user.telefono),
      (this.direccion = user.direccion),
      (this.email = user.email),
      (this.user_password = user.user_password),
      (this.user_status = user.user_status);
  }

  static async isRegistered(cedula, email) {
    const pool = await connect();
    const [results] = await pool.query(queries.selectUser, [cedula, email]);

    if (results.length > 0)
      throw new Error("El usuario ha sido registrado anteriormente.");
  }

  static async create(newUser) {
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
  }

  static async userExist(value) {
    const pool = await connect();
    const [row] = await pool.query(queries.exist, [value]);

    if (!row.length) throw new Error("Correo electrónico o contraseña incorrectos");

    return row[0];
  }
}
