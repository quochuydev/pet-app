import { pgTable, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";

export const appointments = pgTable("appointments", {
  id: serial("id").primaryKey(),
  // Owner information
  fullName: varchar("full_name", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 50 }).notNull(),
  petName: varchar("pet_name", { length: 255 }).notNull(),

  // Pet details
  petType: varchar("pet_type", { length: 50 }).notNull(),
  petAge: varchar("pet_age", { length: 50 }),

  // Appointment details
  preferredDate: varchar("preferred_date", { length: 50 }).notNull(),
  preferredTime: varchar("preferred_time", { length: 50 }).notNull(),
  serviceType: varchar("service_type", { length: 100 }).notNull(),

  // Additional information
  notes: text("notes"),

  // Metadata
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export type Appointment = typeof appointments.$inferSelect;
export type NewAppointment = typeof appointments.$inferInsert;
