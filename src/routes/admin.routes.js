import { Router } from "express";
import * as Admin from "../controllers/admin.controller";
import { loggedIn, adminOnly } from "../helpers/auth.middleware";

const router = Router();

router.get('/admin/:id', loggedIn, adminOnly, Admin.admin);

export default router;