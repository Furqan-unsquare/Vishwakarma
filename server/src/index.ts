import "dotenv/config";
import express from "express";
import cors from "cors";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

import DonationRoutes from "./routes/donation.js";
import EventRoutes from "./routes/events.js";
const app = express();

app.use(
  cors({
    origin: ["https://admin-vishwakarma-unsquare.netlify.app/"],
    credentials: true,
  })
);

// auth init
app.all("/api/auth/{*splat}", toNodeHandler(auth));

// MIDDLEWARE INIT
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
});
