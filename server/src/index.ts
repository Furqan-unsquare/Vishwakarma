import "dotenv/config";
import logger from "./config/pino-config.js";
import express from "express";
import cors from "cors";
import { pinoHttp } from "pino-http";
// import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

import DonationRoutes from "./routes/donation.js";
import EventRoutes from "./routes/events.js";
const app = express();

// LOGGER INIT
app.use(pinoHttp({ logger }));

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    credentials: true,
  })
);

// auth init
app.all("/api/auth/{*splat}", toNodeHandler(auth));

// MIDDLEWARE INIT
// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded());

// APP ROUTES
app.get("/", (req, res) => {
  res.status(200).send("Welcome to SHIVKUMAR SAMAJ");
});
app.use(DonationRoutes);
app.use(EventRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Process started at PORT ${PORT}`);
  logger.info(`Process started at PORT ${PORT}`);
});
