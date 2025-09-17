import express from "express";
import { verifySession } from "../middleware/verifySession.js";
import {
  addDonation,
  updateDonation,
  deleteDonation,
  getAllDonation,
  getDonation,
  streamDonations,
  getDonationGroupedWithEvent,
} from "../controllers/donation.controller.js";

const router = express
  .Router()
  .post("/donation/add", verifySession, addDonation)
  .put("/donation/update", verifySession, updateDonation)
  .get("/donation/fetch/:id", getDonation)
  .get("/donation/fetch-all", getAllDonation)
  .get("/donation/stream", streamDonations)
  .get("/donation/events", getDonationGroupedWithEvent)
  .delete("/donation/delete/:id", verifySession, deleteDonation);

export default router;
