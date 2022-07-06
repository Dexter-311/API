export class Patient {
  constructor(patient) {
    (this.id = patient.id),
      (this.cedula = patient.cedula),
      (this.primer_nombre = patient.primer_nombre),
      (this.segundo_nombre = patient.segundo_nombre),
      (this.apellidos = patient.apellidos),
      (this.seguro_medico = patient.seguro_medico),
      (this.seguro_medico_compania = patient.seguro_medico_compania),
      (this.telefono = patient.telefono),
      (this.direccion = patient.direccion);
  }
};