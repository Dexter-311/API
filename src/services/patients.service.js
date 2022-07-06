import { connect } from "../database";

import Patient from "../models/patient.model";
import * as queries from "../queries/patients";

import { nanoid } from "nanoid";

export const getPatients = async (req, res) => {
  const pool = await connect();
  const [results] = await pool.query(queries.getAllPatients);
  res.status(200).json(results);
};

export const getCount = async (req, res) => {
  const pool = await connect();
  const [results] = await pool.query(queries.getPatientsCount);
  res.status(200).json(results[0]["COUNT(*)"]);
};

export const getById = async (req, res) => {
  const id = req.params.id;

  const pool = await connect();
  const [results] = await pool.query(queries.getPatientById, [id]);

  res.status(200).json(results);
};

export const create = async (req, res) => {
  const patient = new Patient(req.body);

  try {
    const pool = await connect();
    await pool.query(queries.createPatient, [
      nanoid(),
      patient.cedula,
      patient.primer_nombre,
      patient.segundo_nombre,
      patient.apellidos,
      patient.seguro_medico,
      patient.seguro_medico_compania,
      patient.telefono,
      patient.direccion,
    ]);
    res.status(200).send("Paciente creado");
  } catch (e) {
    res.status(500).send("Error al crear el paciente");
    console.log(e);
  }
};

export const deleteById = async (req, res) => {
  try {
    const id = req.params.id;

    const pool = await connect();
    await pool.query(queries.deletePatientById, [id]);

    res.status(200).send("Paciente eliminado");
  } catch (e) {
    res.status(500).send("Error al eliminar el paciente");
    console.log(e);
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;

    const pool = await connect();
    await pool.query(queries.updatePatientById, [req.body, id]);

    res.status(200).send("Paciente actualizado");
  } catch (e) {
    res.status(500).send("Error al actualizar el paciente");
    console.log(e);
  }
};
