import cron from "node-cron";
import { resetAllUserUsage } from "./resetUsage";

cron.schedule("0 0 * * *", async () => {
  console.log("Running daily usage reset job...");
  await resetAllUserUsage();
});
