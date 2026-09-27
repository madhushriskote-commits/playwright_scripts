import test, { expect } from "@playwright/test";

test("double click",async({page})=>{

await page.goto("https://demoqa.com/buttons")

const Doubleclick = page.getByRole("button",{name:"Double Click Me"})

await Doubleclick.dblclick()

const message = page.locator("#doubleClickMessage")

await expect(message).toContainText("You have done a double click")
})

test("Right click",async({page})=>{

await page.goto("https://demoqa.com/buttons")

const RightClick = page.getByRole("button",{name:"Right Click Me"})

await RightClick.click({button:"right"})

const message = page.locator("#rightClickMessage")

await expect(message).toContainText("You have done a right click")
})

test("Mouse Hover",async({page})=>{

await page.goto("https://demoqa.com/tool-tips")

const hover = page.getByRole("button",{name:"Hover me to see"})

await hover.hover()

const tooltip = page.getByRole("tooltip");

await expect(tooltip).toBeVisible();
await expect(tooltip).toHaveText("You hovered over the Button");
})
test("Mouse Hover2",async({page})=>{

await page.goto("https://demoqa.com/tool-tips")

const hover = page.getByRole("button",{name:"Hover me to see"})

await hover.hover()

const tooltip = page.locator("#toolTipTextField");

await expect(tooltip).toBeVisible();
await expect(tooltip).toHaveText("Hover me to see");
})

test("Double click",async({page})=>{

 await page.goto("https://qa-practice.netlify.app/double-click")   
 const dbclick= page.locator("#double-click-btn")
 await dbclick.dblclick()
 console.log(await dbclick.innerText())
})

