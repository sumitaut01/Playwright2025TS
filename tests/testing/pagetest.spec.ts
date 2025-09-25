

import { test } from "../pages/myFixtures";
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { DashboardPage } from "../pages/DashboardPage";

test("pagetest", async({ loginPage, dashboardPage }: { loginPage: LoginPage; dashboardPage: DashboardPage })=>{

await loginPage.goto();
await loginPage.login("admin","admin@123");
await dashboardPage.navigateToUsers();
await dashboardPage.searchUser("naveen");
await expect(dashboardPage.firstUser).toHaveText("naveen"); 
await dashboardPage.captureScreenshot("usersearch.png");

});