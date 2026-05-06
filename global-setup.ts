import * as dotenv from "dotenv";

//process.env.ENV this is used to get the value of the ENV variable from the environment. 
// if it is not set, it will default to "qa". This allows you to have different environment configurations
//  (e.g., .env.qa, .env.prod) and load the appropriate one based on the value of ENV.

//how to pass ENV variable when running the tests
// you can set the ENV variable in the command line before running the tests. For example:
// ENV=prod npx playwright test



async function globalSetup() {
  console.log("Global setup started");
  const env = process.env.ENV || "qa";   // default env
  dotenv.config({
    path: `.env.${env}`,
    override: true,
  });
}

export default globalSetup;
