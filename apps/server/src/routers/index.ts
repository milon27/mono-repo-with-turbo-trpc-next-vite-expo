import { router } from "../trpc";
import { healthRouter } from "./health-check.route";

export const appRouter = router({
  health: healthRouter,
});
