import path from 'path';

import * as Service from "../services/auth.service";
import { User } from "../models/auth.model";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const landingPage = async (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'pages', 'landing.html'));
};

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.user_password, salt);

  const user = new User(req.body);
  user.user_password = hashedPassword;
  user.nombre = req.body.segundo_nombre
    ? req.body.primer_nombre + " " + req.body.segundo_nombre
    : req.body.primer_nombre;
  user.user_status = req.body.user_status ? req.body.user_status : "2";

  try {
    await Service.isRegistered(req.body.cedula, req.body.email);

    await Service.create(user);

    await Service.migrate(user.user_status, user.id);

    res.send("Usuario registrado exitosamente");
  } catch (err) {
    if (err.message == "El usuario ha sido registrado anteriormente.") {
      res.status(400).send(err.message);
    } else {
      res.status(500).send("Ha ocurrido un error al registrar al usuario.");
    }
  }
};

export const loginUser = async (req, res) => {
  try {
    //Check if user exists
    const user = await Service.userExist(req.body.email);

    //Create and assing token
    if (user) {
      const validPassword = await bcrypt.compare(
        req.body.user_password,
        user.user_password
      );
      if (!validPassword)
        return res
          .status(400)
          .send("Correo electrónico o contraseña incorrectos");

      //Create and assign token
      const token = jwt.sign(
        {
          id: user.id,
          status: user.user_status,
          exp: Math.floor(Date.now() / 1000) + 60 * 60,
        },
        process.env.TOKEN_SECRET
      );

      res.header("auth-token", token).send({ token: token });
    }
  } catch (err) {
    if (err.message == "Correo electrónico o contraseña incorrectos") {
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
