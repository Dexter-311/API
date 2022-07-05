import { Router } from "express";
import * as User from "../controllers/user.controller";
import { loggedIn, adminOnly } from "../helpers/auth.middleware";

const router = Router();

router.post('/register', User.register);

router.post('/login', User.login);

router.get('/home/:id', loggedIn, User.home);

router.get('/admin/:id', loggedIn, adminOnly, User.admin);

export default router;