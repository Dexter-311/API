import { Router } from "express";
import * as Patients from "../controllers/patients.controller";

const router = Router();

/**
 * tags: 
 *  name: Patients 
 *  description: Patients EndPoints
 */

/**
 * @openapi
 * /patients:
 *  get:
 *      tags: [Patients]
 *      summary: Returns a patients list
 *      description: All patients on database
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  application/json:
 *                      example: 
 *                          id: 25
 *                          cedula: '40534234354'
 *                          primer_nombre: JUAN
 *                          segundo_nombre: MICHAEL
 *                          apellidos: SIERRA LUNA
 *                          seguro_medico: AS23SDF245
 *                          seguro_medico_compania: META SALUD
 *                          telefono: '8095556565'
 *                          direccion: CALLE SEGUNDO, MARIA AUXILIADORA, SANTO DOMINGO OESTE
 *                          
 */
router.get("/patients", Patients.getPatients);

/**
 * @openapi
 * /patients/count:
 *  get:
 *      tags: [Patients]
 *      summary: Returns patients count.
 *      description: All patients count.
 *      responses:
 *          200:
 *              description: OK
 *              content:
 *                  text/plain:
 *                      example: 
 *                          25                  
 */
router.get("/patients/count", Patients.getPatientsCount);

/**
 * @openapi
 * paths:
 *  /patients/{id}:
 *   get:
 *       tags: [Patients]
 *       summary: Returns a patient by id
 *       description: Patient selected by id
 *       parameters:
 *        - in: path
 *          name: id
 *          description: Patient id
 *          required: true
 *          schema:
 *              type: integer
 *       responses:
 *           200:
 *               description: OK
 *               content:
 *                   application/json:
 *                       example: 
 *                           id: 25
 *                           cedula: '40534234354'
 *                           primer_nombre: JUAN
 *                           segundo_nombre: MICHAEL
 *                           apellidos: SIERRA LUNA
 *                           seguro_medico: AS23SDF245
 *                           seguro_medico_compania: META SALUD
 *                           telefono: '8095556565'
 *                           direccion: CALLE SEGUNDO, MARIA AUXILIADORA, SANTO DOMINGO OESTE
 *                          
 */
router.get("/patients/:id", Patients.getPatientById);

/**
 * @openapi
 * /patients/:
 *  post:
 *      tags: [Patients]
 *      summary: Create new patient.
 *      description: Used to create patient.
 *      parameters:
 *          name: id
 *      responses:
 *          204:
 *              description: No Content                
 */
router.post("/patients", Patients.createPatient);

router.delete("/patients/:id", Patients.deletePatientById);

router.put("/patients/:id", Patients.updatePatientById);

export default router;
