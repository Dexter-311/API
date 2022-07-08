export const getAllPatients = 'SELECT * FROM Patients';
export const getPatientsCount = 'SELECT COUNT(*) FROM Patients';
export const getPatientById = 'SELECT * FROM Patients WHERE id = ?';
export const deletePatientById = 'DELETE FROM Patients WHERE id = ?';
export const updatePatientById = 'UPDATE Patients SET ? WHERE id = ?';