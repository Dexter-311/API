import path from "path";

//Model - Services
import * as Service from "../services/auth.service";

//Third-party libraries
import bcrypt from "bcrypt";
import { nanoid } from "nanoid";

export const landingPage = async (req, res) => {
  if(req.session.user) res.redirect('/home');

  res.status(200).sendFile(path.join(__dirname, "..", "views", "index.html"));
};

export const registerUser = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.user_password, salt);

  const user = {
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
    user_status: "2",
  };

  try {
    await Service.isRegistered(req.body.cedula, req.body.email);

    await Service.create(user);

    res.status(200).json({ message: "ok" });
  } catch (err) {
    if (err.message == "El usuario ha sido registrado anteriormente.") {
      res
        .status(409)
        .json({ message: "El usuario ha sido registrado anteriormente" });
    } else {
      console.log(err);
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

      req.session.user = { id: user.id, status: user.user_status };

      res.status(200).send('ok');
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

export const logoutUser = async (req, res) => {
  req.session.destroy();
  res.send('logout');
};

