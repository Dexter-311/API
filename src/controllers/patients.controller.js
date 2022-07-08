import * as Service from '../services/patients.service';

/*
Patient Information 
*/

export const getPatients = async (req, res) => {
    Service.getPatients(req, res);
};

export const getPatientsCount = async (req, res) => {
    Service.getCount(req, res);
};

export const getPatientById = async (req, res) => {
    Service.getById(req, res);
};

export const deletePatientById = async (req, res) => {
    Service.deleteById(req, res);
};

export const updatePatientById = async (req, res) => {
    Service.update(req, res);
};


/*
Patient Content
*/

export const home = (req, res) => {
    res.json({message: 'Hello!'});
};