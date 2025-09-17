import { Request, Response } from "express";
import {
  addDonationSchema,
  donations,
  events,
  updateDonationSchema,
} from "../db/schema";
import db from "../db/db";
import { desc, eq, sql } from "drizzle-orm";
import { type } from "arktype";

let clients: { id: number; res: Response }[] = [];

type StreamDonation = {
  eventName: string;
  eventId: number;
  id: number;
  donatorName: string;
  amount: string;
  paymentMode: "cash" | "upi" | "card";
  message: string | null;
  createdAt: Date;
  updatedAt: Date;
  transactionId: string | null;
};

export const addDonation = async (req: Request, res: Response) => {
  req.body.eventId = Number(req.body.eventId);
  const data = addDonationSchema(req.body);
  if (data instanceof type.errors) {
    res.status(400).json({ error: data.summary });
    return;
  }
  console.log(clients.length);

  try {
    const [newDonation] = await db.insert(donations).values(data).returning();
    const event = await db
      .select({ eventName: events.name })
      .from(events)
      .where(eq(events.id, newDonation.eventId));

    const donation: StreamDonation = {
      ...newDonation,
      eventName: event[0].eventName,
    };
    res.status(201).json(donation);
    clients.forEach((client) =>
      client.res.write(`data: ${JSON.stringify(donation)}\n\n`)
    );
    return;
  } catch (err) {
    console.error("Error while adding", err);
    res.status(500).json({ error: "Failed to add donation" });
    return;
  }
};

export const getDonation = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    if (isNaN(id)) {
      res.status(400).json({ error: "Invalid donation id" });
      return;
    }

    const donation = await db.query.donations.findFirst({
      where: eq(donations.id, id),
      with: {
        event: true,
      },
    });

    if (!donation) {
      res.status(404).json({ error: "Donation not found" });
      return;
    }

    res.status(200).json({ donation });
    return;
  } catch (err) {
    console.error("Error fetching donation:", err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const getAllDonation = async (req: Request, res: Response) => {
  try {
    const allDonations = await db.query.donations.findMany({
      orderBy: (donations, { desc }) => [desc(donations.createdAt)],
    });

    res.status(200).json({ donation: allDonations });
    return;
  } catch (err) {
    console.error("Error fetching donations:", err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const updateDonation = async (req: Request, res: Response) => {
  const data = updateDonationSchema(req.body);
  if (data instanceof type.errors) {
    res.status(400).json({ error: data.summary });
    return;
  }

  try {
    const [updatedDonation] = await db.update(donations).set(data).returning();
    res.status(201).json(updatedDonation);
    return;
  } catch (err) {
    console.error("Error while updating", err);
    res.status(500).json({ error: "Failed to update donation" });
    return;
  }
};

export const deleteDonation = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    res.status(400).json({ error: "Id required for action" });
    return;
  }

  try {
    await db.delete(donations).where(eq(donations.id, id));

    res.status(203).json({ id });
    return;
  } catch (err) {
    console.error("Error deleting donations:", err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};

export const streamDonations = async (req: Request, res: Response) => {
  res.setHeader("Content-Type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");

  console.log(clients.length);

  try {
    // const allDonations = await db.query.donations.findMany({
    //   orderBy: (donations, { desc }) => [desc(donations.amount)],
    // });
    const allDonations = await db
      .select({
        eventName: events.name,
        eventId: events.id,
        id: donations.id,
        donatorName: donations.donatorName,
        amount: donations.amount,
        paymentMode: donations.paymentMode,
        message: donations.message,
        createdAt: donations.createdAt,
        updatedAt: donations.updatedAt,
        transactionId: donations.transactionId,
      })
      .from(donations)
      .innerJoin(events, eq(events.id, donations.eventId))
      .orderBy(desc(donations.amount));

    res.write(`data: ${JSON.stringify(allDonations)}\n\n`);
    const clientId = Date.now();
    clients.push({ id: clientId, res });
    req.on("close", () => {
      console.log(`${clientId} Connection closed`);
      clients = clients.filter((client) => client.id !== clientId);
    });
  } catch (error) {
    res
      .status(400)
      .json({ error: "failed to send events. Please try again later" });
  }
  return;
};

export const getDonationGroupedWithEvent = async (
  req: Request,
  res: Response
) => {
  try {
    const allDonations = await db
      .select({
        totalAmount: sql<number>`SUM(${donations.amount})`,
        eventId: donations.eventId,
        eventName: events.name,
      })
      .from(donations)
      .innerJoin(events, eq(donations.eventId, events.id))
      .groupBy(donations.eventId, events.name);

    res.status(200).json({ donations: allDonations });
    return;
  } catch (err) {
    console.error("Error fetching donations:", err);
    res.status(500).json({ error: "Internal server error" });
    return;
  }
};
