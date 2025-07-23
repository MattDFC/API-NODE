import { Router } from "express";
const router = Router();

import { login } from "../controllers/authcontrollers.js";

router.post("/login", login);

export default router;