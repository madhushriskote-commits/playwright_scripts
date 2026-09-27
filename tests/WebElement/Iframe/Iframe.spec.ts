import { test, expect } from "@playwright/test";
 
test("Iframe Handling", async ({ page }) => { 
await page.goto("https://jqueryui.com/checkboxradio/")

//identify iframe and store into one locator by using frameLocator()
const frame = page.frameLocator(".demo-frame")

//select radio button in iframe
await frame.getByText("Paris",{exact:true}).check()

//click button link in main html page
await page.getByText("Droppable").click()

})