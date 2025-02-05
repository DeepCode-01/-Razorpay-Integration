import express, { Router } from "express";
import { checkOut, paymentvarification } from "../controllers/paymentController.js";

const router = express.Router()

router.route("/checkout").post(checkOut);

router.route("/paymentvarification").post(paymentvarification)

export default router;