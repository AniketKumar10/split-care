// start the studion environment by typing >> npm run db:studio

import { config } from "dotenv";
import { defineConfig } from "drizzle-kit";

// Load environment variables from .env.local
config({ path: ".env.local" });

export default defineConfig({
  schema: "./db/schema.ts",      // Path to your schema file
  dialect: "postgresql",         // Specify 'postgresql' as the dialect for PostgreSQL
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
  verbose: true,
  strict: true,
});
