import express from "express";
import {
  reads,
  readsId,
  creates,
  updates,
  deletes,
} from "../controllers/userController";

const router = express.Router();

router.get("/reads", reads);
router.get("/reads/:id", readsId);
router.post("/creates", creates);
router.put("/updates", updates);
router.delete("/deletes", deletes);

export default router;
