import { connect } from '../database';
import { nanoid } from 'nanoid';
import * as queries from '../queries/patients';

export const getPatients = async (req, res) => {
    const pool = await connect();
    const [results] = await pool.query(queries.getAllPatients);
    res.status(200).json(results);
};

export const getPatientsCount = async (req, res) => {
    const pool = await connect();
    const [results] = await pool.query(queries.getPatientsCount);
    res.status(200).json(results[0]['COUNT(*)']);
};

export const getPatientById = async (req, res) => {
    const id = req.params.id;

    const pool = await connect();
    const [results] = await pool.query(queries.getPatientById, [id]);

    res.status(200).json(results);
};

export const createPatient = async (req, res) => {
    try {
        const pool = await connect();
        await pool.query(queries.createPatient, [
            nanoid(),
            req.body.cedula,
            req.body.primer_nombre,
            req.body.segundo_nombre,
            req.body.apellidos,
            req.body.seguro_medico,
            req.body.seguro_medico_compania,
            req.body.telefono,
            req.body.direccion,
            
        ]);
        res.status(204);
        res.send("Patient created");
    } catch(e) {
        res.status(500);
        console.log(e);
    }

};

export const deletePatientById = async (req, res) => {
    try {
        const id = req.params.id;

        const pool = await connect();
        await pool.query(queries.deletePatientById, [id]);
    
        res.status(204);
        res.send('Patient updated');

    } catch(e) {
        res.status(500);
        console.log(e);
    }
};

export const updatePatientById = async (req, res) => {
    try {
        const id = req.params.id;

        const pool = await connect();
        await pool.query(queries.updatePatientById, [req.body ,id]);
    
        res.status(204);
        res.send('Patiend updated');

    } catch(e) {
        res.status(500);
        console.log(e);
    }
};