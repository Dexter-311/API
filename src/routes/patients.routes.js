import { Router } from "express";

import * as Patients from "../controllers/patients.controller";
import { loggedIn } from "../middlewares/auth.middleware";

const router = Router();

/* NAVEGACION DEL PACIENTE */

router.get('/home', loggedIn, Patients.home);

router.get('/user', loggedIn, Patients.getUser);

export default router;
