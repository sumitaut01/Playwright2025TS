import * as dotenv from "dotenv";

async function globalSetup() {
  console.log("Global setup started");
  const env = process.env.ENV || "qa";   // default env
  dotenv.config({
    path: `.env.${env}`,
    override: true,
  });
}

export default globalSetup;
