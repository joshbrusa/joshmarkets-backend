import express from "express";
import {
  signUp,
  signIn,
  signOut,
  forgotPassword,
  forgotPasswordJwt,
} from "../controllers/authController";

const router = express.Router();

router.post("/signUp", signUp);
router.post("/signIn", signIn);
router.post("/signOut", signOut);
router.post("/forgotPassword", forgotPassword);
router.post("/forgotPassword/:jwt", forgotPasswordJwt);

export default router;
