import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome 🚀");
});

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Api running on port ${port}`));

// import { appRouter } from "./routers";

// // Export only the type of a router!, This prevents us from importing server code on the client.
// export type AppRouter = typeof appRouter;

// import { createHTTPServer } from "@trpc/server/adapters/standalone";

// const server = createHTTPServer({
//   router: appRouter,
// });

// server.listen(4000);

// -----------------------------------------

// import * as trpcExpress from "@trpc/server/adapters/express";
// import cors from "cors";
// import express from "express";

// import { appRouter } from "./routers";
// import { createContext } from "./trpc";

// const app = express();

// app.use(cors());

// app.use(
//   "/trpc",
//   trpcExpress.createExpressMiddleware({
//     router: appRouter,
//     createContext,
//   })
// );

// app.use("/", (_req, res) => {
//   return res.send({ home: "home" });
// });

// const PORT = process.env.PORT ?? 4000;

// app.listen(PORT, () => {
//   console.log(`Server running on http://localhost:${PORT}`);
// });
