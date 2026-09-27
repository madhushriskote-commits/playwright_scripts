import test from "@playwright/test";

test("Handling iframe",async({page})=>{
await page.goto("https://demo.automationtesting.in/Frames.html")
const frame =await page.frameLocator("#singleframe")
await frame.locator("input[type='text']").fill("Madhushri")
})

