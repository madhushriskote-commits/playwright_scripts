import { test, expect } from "@playwright/test";
 
test("Iframe Handling", async ({ page }) => { 
await page.goto("https://qa-practice.netlify.app/iframe")

const frames =page.frames() //Returns all frames present on the page.
console.log("count of frames",frames.length)

await frames[1].locator("#learn-more").click()
console.log(await frames[1].locator("#show-text").innerText())
//await page.waitForTimeout(2000)

//const Frame = page.frameLocator(".demo-frame")

})
 