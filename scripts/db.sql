CREATE DATABASE IF NOT EXISTS MedMaxDb;

USE MedMaxDb;

CREATE TABLE IF NOT EXISTS Patients(
    id VARCHAR(50) NOT NULL ,
    cedula VARCHAR(11) NOT NULL,
    primer_nombre VARCHAR(50) NOT NULL,
    segundo_nombre VARCHAR(50),
    apellidos VARCHAR(100) NOT NULL,
    seguro_medico VARCHAR(100),
    seguro_medico_compania VARCHAR(50),
    telefono VARCHAR(10) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO Patients (
    cedula,
    primer_nombre,
    apellidos,
    seguro_medico,
    seguro_medico_compania,
    telefono,
    direccion
) VALUES (
    '87345933430',
    'JOSE',
    'PEREZ VALDEZ',
    '345DFG3456DFGSDFG',
    'META-SALUD',
    '3498345347',
    'CALLE PRIMERA, SANTO DOMINGO ESTE'
);