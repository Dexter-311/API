import { Router } from "express";

import * as Patients from "../controllers/patients.controller";
import { loggedIn } from "../helpers/auth.middleware";

const router = Router();

/* CREACION Y ACTUALIZACION DEL PACIENTE */

router.get("/patients", Patients.getPatients);

router.get("/patients/count", Patients.getPatientsCount);

router.get("/patients/:id", Patients.getPatientById);

router.delete("/patients/:id", Patients.deletePatientById);

router.put("/patients/:id", Patients.updatePatientById);


/* NAVEGACION DEL PACIENTE */

router.get('/home/', loggedIn, Patients.home);

export default router;
