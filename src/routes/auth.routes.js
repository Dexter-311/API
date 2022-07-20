import { Router } from "express";
import * as Auth from "../controllers/auth.controller";

const router = Router();

router.get('/', Auth.landingPage);

router.post('/register', Auth.registerUser);

router.post('/login', Auth.loginUser);

router.post('/logout', Auth.logoutUser);

export default router;