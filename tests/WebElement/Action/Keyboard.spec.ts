import { test, expect } from "@playwright/test";

test("Keyborad method press down and enter", async ({ page }) => {
await page.goto("https://www.google.com/")
await page.keyboard.type("PlayWright opening")
await page.waitForTimeout(3000)

for (let i =0; i<=4;i++)
{
    await page.keyboard.press("ArrowDown")
}
await page.keyboard.press("Enter")
})

test("Keyborad method press up and enter", async ({ page }) => {
await page.goto("https://gmail.com/")
await page.getByText("Create an account").click()


})