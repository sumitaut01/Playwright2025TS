

import { test,expect } from "@playwright/test";

test("read data", async ({page})=>{


 await page.goto(process.env.BASE_URL!);

  console.log("User:", process.env.USERNAME);

  const headers = JSON.parse(process.env.HEADERS!);
  console.log(headers.Authorization);


})

//npx playwright test --ENV=QA