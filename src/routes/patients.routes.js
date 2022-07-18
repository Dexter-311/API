import { Router } from "express";

import * as Patients from "../controllers/patients.controller";
import { loggedIn } from "../middlewares/auth.middleware";

const router = Router();

/* NAVEGACION DEL PACIENTE */

router.get('/home/', loggedIn, Patients.home);

export default router;
