export const insertUser =  `INSERT INTO users (
    id,  
    cedula, 
    nombre, 
    apellidos, 
    seguro_medico, 
    seguro_medico_compania, 
    telefono, 
    direccion, 
    email, 
    user_password, 
    user_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

export const selectUser = 'SELECT * FROM users WHERE cedula = ? OR email = ?';

export const exist = 'SELECT * FROM users WHERE email = ?';