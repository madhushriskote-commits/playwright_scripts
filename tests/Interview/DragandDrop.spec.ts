import test, { expect } from "@playwright/test";

test("Drag and Drpop",async({page})=>{

await page.goto("https://the-internet.herokuapp.com/drag_and_drop")

const source = await page.locator("#column-a")
const traget = await page.locator("#column-b")
await source.dragTo(traget)

await expect(source).toContainText("B")
})