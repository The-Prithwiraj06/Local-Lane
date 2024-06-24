import express from "express";
import { createdonate } from "../controllers/donateController.js";

import { authenticate, authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router
  .route("/").post(createdonate)




export default router;