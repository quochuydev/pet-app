import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

// Get database URL from environment variable or use default
const connectionString = process.env.DATABASE_URL || "postgres://petcare:petcare123@localhost:5432/petcare_db";

// Create postgres client
const client = postgres(connectionString);

// Create drizzle instance
export const db = drizzle(client, { schema });
