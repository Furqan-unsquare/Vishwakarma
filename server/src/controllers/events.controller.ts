import { Request, Response } from "express";
import db from "../db/db";
import { events } from "../db/schema";
import { eq } from "drizzle-orm";
import { addEventSchema, updateEventSchema } from "../db/schema";
import { type } from "arktype";

export const addEvent = async (req: Request, res: Response) => {
  req.body.startTime = new Date(req.body.startTime);
  req.body.endTime = new Date(req.body.endTime);

  const data = addEventSchema(req.body);
  if (data instanceof type.errors) {
    res.status(400).json({ error: data.summary });
    return;
  }

  try {
    const [newEvent] = await db.insert(events).values(data).returning();
    res.status(201).json(newEvent);
    return;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const getEvents = async (_req: Request, res: Response) => {
  try {
    const allEvents = await db
      .select({ eventName: events.name, eventId: events.id })
      .from(events);
    res.json(allEvents);
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const [event] = await db.select().from(events).where(eq(events.id, id));

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(event);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const data = updateEventSchema(req.body);
  if (data instanceof type.errors) {
    res.status(400).json({ error: data.summary });
    return;
  }

  try {
    const [updated] = await db
      .update(events)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(events.id, id))
      .returning();

    if (!updated) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const [deleted] = await db
      .delete(events)
      .where(eq(events.id, id))
      .returning();

    if (!deleted) {
      res.status(404).json({ error: "Event not found" });
      return;
    }

    res.json({ message: "Event deleted", deleted });
    return;
  } catch (error: any) {
    res.status(500).json({ error: error.message });
    return;
  }
};
