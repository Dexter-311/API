import { Router } from "express";
import * as Auth from "../controllers/auth.controller";

const router = Router();

router.post('/register', Auth.registerUser);

router.post('/login', Auth.loginUser);

export default router;