import { callerFactory } from "@repo/trpc";
// https://trpc.io/docs/server/server-side-calls#create-caller
export const trpcSSR = () => callerFactory({});
