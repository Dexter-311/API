import { connect } from '../database';
import * as queries from '../queries/user';

export const create = async (newUser, cedula) => {
    const pool = await connect();
    const [ results ] = await pool.query('SELECT * FROM users WHERE cedula = ?', [cedula]);
    
    if(results.length > 0) {
        throw new Error("El usuario ha sido registrado anteriormente.");
    }

    await pool.query(queries.insertInto, [
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
        newUser.user_status
    ]);
};