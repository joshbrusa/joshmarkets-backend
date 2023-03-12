import { Router } from "express";
import {
  signUp,
  signIn,
  signOut,
  forgotPassword,
  forgotPasswordJwt,
} from "../controllers/authController";

const router = Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut", signOut);
router.post("/forgotPassword", forgotPassword);
router.put("/forgotPassword/:jwt", forgotPasswordJwt);

export default router;
