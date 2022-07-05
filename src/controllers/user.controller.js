import { User } from "../models/user.model";

import bcrypt from "bcrypt";
import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.user_password, salt);

  const user = new User({
    id: nanoid(),
    cedula: req.body.cedula,
    nombre: req.body.segundo_nombre
      ? req.body.primer_nombre + " " + req.body.segundo_nombre
      : req.body.primer_nombre,
    apellidos: req.body.apellidos,
    seguro_medico: req.body.seguro_medico,
    seguro_medico_compania: req.body.seguro_medico_compania,
    telefono: req.body.telefono,
    direccion: req.body.direccion,
    email: req.body.email,
    user_password: hashedPassword,
    user_status: req.body.user_status || "1",
  });

  try {
    await User.isRegistered(user.cedula, user.email);

    await User.create(user);
    res.send("Usuario registrado exitosamente");
  } catch (err) {
    if (err.message == "El usuario ha sido registrado anteriormente.") {
      res.status(400).send(err.message);
    } else {
      res.status(500).send(err.message);
    }
  }
};

export const login = async (req, res) => {
  try {
    //Check if user exists
    const user = await User.userExist(req.body.email);

    //Create and assing token
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );
      if (!validPassword)
        return res
          .status(400)
          .send("Correo electrónico/telefeno o contraseña incorrectos");

      //Create and assign token
      const token = jwt.sign(
        { id: user.id, status: user.user_status, exp: Math.floor(Date.now() / 1000) + (60 * 60) },
        process.env.TOKEN_SECRET
      );

      res.header("auth-token", token).send({ token: token });
    }
  } catch (err) {
    if (err.message == "El usuario no existe.") {
      res.status(400).send(err.message);
    } else {
      const error_data = {
        entity: "User",
        model_obj: { params: req.params, body: req.body },
        error_msg: err.message,
      };
      console.log(error_data);
      res
        .status(500)
        .send(
          "Ha ocurrido un error. Intente de nuevo o contacte a su centro de salud."
        );
    }
  }
};

export const home = (req, res) => {
    res.send('User route');
};

export const admin = (req, res) => {
    res.send('Admin route');
};
