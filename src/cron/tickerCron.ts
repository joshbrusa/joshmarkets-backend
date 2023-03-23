import { schedule } from "node-cron";
import { prisma } from "../config/prismaClient";

export default function tickerCron() {
  schedule("* * * * 0-7", async () => {
    try {
      const ploygonRes = await fetch(
        "https://api.polygon.io/v3/reference/tickers?active=true&apiKey=" +
          process.env.POLYGON_API_KEY
      );

      if (ploygonRes.ok) {
        const data = await ploygonRes.json();

        for (const val of data.results) {
          await prisma.ticker.upsert({
            create: {
              id: val.ticker,
            },
            update: {},
            where: { id: val.ticker },
          });
        }
      } else {
        console.log("ticker cron fetch failed");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
