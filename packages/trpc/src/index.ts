import { initTRPC } from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";

// created for each request
export const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({}); // no context
type Context = Awaited<ReturnType<typeof createContext>>;

const t = initTRPC.context<Context>().create();

// router stuff

const router = t.router;
const procedure = t.procedure;

export const appRouter = router({
  get: procedure.query(() => {
    return { m: "hello" };
  }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
// https://trpc.io/docs/server/server-side-calls#create-caller
export const callerFactory = t.createCallerFactory(appRouter);
