import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { Request, Response } from "express";
import superjson from "superjson";

export function createContext({ req, res }: { req: Request; res: Response }): {
  req: Request;
  res: Response;
} {
  return { req, res };
}

type Context = inferAsyncReturnType<typeof createContext>;
const t = initTRPC.context<Context>().create({ transformer: superjson });

export const middleware = t.middleware;
export const router = t.router;
export const publicProcedure = t.procedure;
