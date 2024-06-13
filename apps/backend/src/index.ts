import { appRouter, createContext } from "@repo/trpc";
import * as trpcExpress from "@trpc/server/adapters/express";
import cors from "cors";
import express from "express";

const app = express();

app.use(cors({ origin: true }));

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: createContext,
  })
);

app.listen(4000, () => {
  console.log(`app running on port 4000`);
});
