import { schedule } from "node-cron";
import { prisma } from "../config/prismaClient";

export default function tickerCron() {
  schedule("* * * * 0-7", async () => {
    try {
      const secRes = await fetch(
        "https://www.sec.gov/files/company_tickers.json"
      );

      if (secRes.ok) {
        const data = await secRes.json();

        for (const id in data) {
          await prisma.company.upsert({
            create: {
              cik: data[id].cik_str,
              ticker: data[id].ticker,
              title: data[id].title,
            },
            update: {
              ticker: data[id].ticker,
              title: data[id].title,
            },
            where: { cik: data[id].cik_str },
          });
        }

        console.log("sec company cron success");
      } else {
        console.log("sec company cron failure");
      }
    } catch (error) {
      console.log(error);
    }
  });
}
