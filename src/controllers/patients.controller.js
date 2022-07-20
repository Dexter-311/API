import * as Service from "../services/patient.service";
import path from 'path';

/*
Patient Content
*/

export const home = async (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "..", "views", "home.html"));
};

export const getUser = async (req, res) => {
  try {
    const user = await Service.getUser(req.session.user.id);
    console.log(user);
    res.status(200).json({ name: user.dataValues.nombre });
  } catch (err) {
    console.log(err);
  }
};
