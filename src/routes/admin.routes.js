import { Router } from "express";
import * as Admin from "../controllers/admin.controller";
import { loggedIn, adminOnly } from "../middlewares/auth.middleware";

const router = Router();

router.get('/admin/', loggedIn, adminOnly, Admin.admin);

export default router;