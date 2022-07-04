export const getAllPatients = 'SELECT * FROM Patients';
export const getPatientsCount = 'SELECT COUNT(*) FROM Patients';
export const getPatientById = 'SELECT * FROM Patients WHERE id = ?';
export const createPatient = `INSERT INTO Patients (
    id,
    cedula,
    primer_nombre,
    segundo_nombre,
    apellidos,
    seguro_medico,
    seguro_medico_compania,
    telefono,
    direccion
) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
export const deletePatientById = 'DELETE FROM Patients WHERE id = ?';
export const updatePatientById = 'UPDATE Patients SET ? WHERE id = ?';