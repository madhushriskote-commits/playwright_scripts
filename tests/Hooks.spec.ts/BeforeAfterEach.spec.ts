import test from "@playwright/test";
import { afterEach } from "node:test";

test.beforeEach("Before Each exmple",async({page})=>{
await page.goto("http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login")
await page.locator("#txtUsername").fill("Admin")
await page.locator("#txtPassword").fill("Qedge123!@#")
await page.locator("#btnLogin").click()
})

test("Click Admin",async({page})=>{
    console.log("Clicking on Admin Menu")
    await page.getByRole('link',{name : "Admin"}).click()
    await page.waitForTimeout(3000)
})
test("Click PIm",async({page})=>{
    console.log("Clicking on Pim Menu")
    await page.getByRole('link',{name : "PIM"}).click()
    await page.waitForTimeout(3000)
})

test.afterEach("After Each test case",async({page})=>{
    await page.close()
})