import { relations } from "drizzle-orm/relations";
import { user, account, session, events, donations } from "./schema";

export const accountRelations = relations(account, ({ one }) => ({
  user: one(user, {
    fields: [account.userId],
    references: [user.id],
  }),
}));

export const userRelations = relations(user, ({ many }) => ({
  accounts: many(account),
  sessions: many(session),
}));

export const sessionRelations = relations(session, ({ one }) => ({
  user: one(user, {
    fields: [session.userId],
    references: [user.id],
  }),
}));

export const eventRelations = relations(events, ({ many }) => ({
  donations: many(donations),
}));

export const donationRelations = relations(donations, ({ one }) => ({
  event: one(events, {
    fields: [donations.eventId],
    references: [events.id],
  }),
}));

export const schemaRelations = {
  userRelations,
  accountRelations,
  sessionRelations,
  eventRelations,
  donationRelations,
};
