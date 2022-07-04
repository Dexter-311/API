import { Router } from "express";
import * as User from "../controllers/user.controller";

const router = Router();

router.post('/register', User.register);

router.post('/login', User.login);

export default router;