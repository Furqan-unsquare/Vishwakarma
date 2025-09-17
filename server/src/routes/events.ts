import express from "express";
import { verifySession } from "../middleware/verifySession.js";
import {
  addEvent,
  updateEvent,
  deleteEvent,
  getEventById,
  getEvents,
} from "../controllers/events.controller.js";

const router = express
  .Router()
  .post("/event/add", verifySession, addEvent)
  .put("/event/update", verifySession, updateEvent)
  .get("/event/fetch/:id", getEventById)
  .get("/event/fetch-all", getEvents)
  .delete("/event/delete/:id", verifySession, deleteEvent);

export default router;
