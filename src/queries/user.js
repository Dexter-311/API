export const insertInto =  `INSERT INTO users (
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