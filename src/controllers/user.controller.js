import * as User from '../models/user.model';

import bcrypt from 'bcrypt';
import { nanoid } from 'nanoid';

export const register = async (req, res) => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.user_password, salt);

    const user = {
        id: nanoid(),
        cedula: req.body.cedula,
        nombre: req.body.segundo_nombre ? req.body.primer_nombre + " " + req.body.segundo_nombre : req.body.primer_nombre,
        apellidos: req.body.apellidos,
        seguro_medico: req.body.seguro_medico,
        seguro_medico_compania: req.body.seguro_medico_compania,
        telefono: req.body.telefono,
        direccion: req.body.direccion,
        email: req.body.email,
        user_password: hashedPassword,
        user_status: req.body.status || "1"
    };

    try {
        await User.create(user, user.cedula);
        res.send('Usuario registrado exitosamente');

    } catch(error) {
        res.status(400).send(error.message);
    }
}; 

export const login = async (req, res) => {
    res.send('logging user')
}; 