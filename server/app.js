import express from "express";
import paymentRoute from "./routes/payment.js";
import cors from "cors"
import { config } from "dotenv";

config({ path: "./config/config.env" });

export const app = express();

app.use(cors());

app.use("/api", paymentRoute)