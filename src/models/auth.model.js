import { nanoid } from "nanoid";

export class User {
  constructor(user) {
    (this.id = nanoid()),
      (this.cedula = user.cedula),
      (this.nombre = user.nombre),
      (this.apellidos = user.apellidos),
      (this.seguro_medico = user.seguro_medico),
      (this.seguro_medico_compania = user.seguro_medico_compania),
      (this.telefono = user.telefono),
      (this.direccion = user.direccion),
      (this.email = user.email),
      (this.user_password = user.user_password),
      (this.user_status = user.user_status);
  }
}
