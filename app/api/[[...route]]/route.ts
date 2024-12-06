import { Hono } from "hono";
import { handle } from "hono/vercel";

import accounts from "./accounts";

export const runtime = "edge";

const app = new Hono().basePath("/api");

const routes = app
  .route("/accounts", accounts); // accounts<Env> ..... TRYING USING IT

export const GET = handle(app);
export const POST = handle(app);

export type AppType = typeof routes

// 2.18.25




// import { Hono } from "hono";
// import { handle } from "hono/vercel";
// // import { clerkMiddleware, getAuth } from "@hono/clerk-auth";

// import accounts from "./accounts";
// import { accounts } from './../../../db/schema';

// export const runtime = "edge";

// const app = new Hono().basePath("/api")

// const routes = app
//   .route("/accounts", accounts);

// export const GET = handle(app);
// export const POST = handle(app);

// export type AppType = typeof routes;
