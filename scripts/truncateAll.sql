use medmaxdb;

DROP TABLE admins;
DROP TABLE patients;
DROP TABLE doctors;

DROP TABLE users;

CREATE TABLE IF NOT EXISTS users(
	id VARCHAR(50) NOT NULL,
	cedula VARCHAR(11) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	seguro_medico VARCHAR(100),
	seguro_medico_compania VARCHAR(50),
	telefono VARCHAR(10) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	user_password VARCHAR(100) NOT NULL,
	user_status CHAR(1),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at DATETIME,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS patients (
	id VARCHAR(50) NOT NULL,
	cedula VARCHAR(11) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	seguro_medico VARCHAR(100),
	seguro_medico_compania VARCHAR(50),
	telefono VARCHAR(10) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	user_password VARCHAR(100) NOT NULL,
	user_status CHAR(1),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at DATETIME,
    PRIMARY KEY (cedula),
	FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS doctors (
	id VARCHAR(50) NOT NULL,
	cedula VARCHAR(11) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	seguro_medico VARCHAR(100),
	seguro_medico_compania VARCHAR(50),
	telefono VARCHAR(10) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	user_password VARCHAR(100) NOT NULL,
	user_status CHAR(1),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at DATETIME,
    PRIMARY KEY (cedula),
	FOREIGN KEY (id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS admins (
	id VARCHAR(50) NOT NULL,
	cedula VARCHAR(11) NOT NULL,
	nombre VARCHAR(50) NOT NULL,
	apellidos VARCHAR(100) NOT NULL,
	seguro_medico VARCHAR(100),
	seguro_medico_compania VARCHAR(50),
	telefono VARCHAR(10) NOT NULL,
	direccion VARCHAR(100) NOT NULL,
	email VARCHAR(50) NOT NULL,
	user_password VARCHAR(100) NOT NULL,
	user_status CHAR(1),
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	update_at DATETIME,
    PRIMARY KEY (cedula),
	FOREIGN KEY (id) REFERENCES users(id)
);