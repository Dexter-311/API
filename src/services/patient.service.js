import { Op } from "sequelize";
import User from "../models/auth.model";

export const getUser = async (id) => {
  try {
    const results = await User.findByPk(id);
    return results;
    
  } catch (err) {
    console.log(err);
  }
};
