import { schedule } from "node-cron";

export default function tickerCron() {
  schedule("* * * * 0-7", () => {
    console.log("running a task every day of the week");
  });
}
