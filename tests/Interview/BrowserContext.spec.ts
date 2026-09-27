import test, { chromium, expect } from "@playwright/test";

test("Browser content demo",async({})=>{
    const browser = await chromium.launch() // create broswer
    const context = await browser.newContext() // create context
    //const page = await context.newPage()
    //await page1.goto("https://playwright.dev/")

    //createing 2 pages

    const page1 = await context.newPage()
    const page2 = await context.newPage()

   console.log(context.pages().length)

   await page1.goto("https://playwright.dev/")
   await expect(page1).toHaveTitle("Fast and reliable end-to-end testing for modern web apps | Playwright")


})