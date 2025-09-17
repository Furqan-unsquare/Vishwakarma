ALTER TABLE "events" DISABLE ROW LEVEL SECURITY;--> statement-breakpoint
DROP TABLE "events" CASCADE;--> statement-breakpoint
ALTER TABLE "donations" DROP CONSTRAINT "donations_event_id_events_id_fk";
--> statement-breakpoint
ALTER TABLE "donations" DROP COLUMN "event_id";