import {test,expect} from "@playwright/test";

test("Check box selection", async({page})=>{
await page.goto("https://the-internet.herokuapp.com/checkboxes")

const firstCheckbox = page.locator("input[type='checkbox']").first()
await firstCheckbox.uncheck()
//await expect(firstCheckbox).toBeChecked();

const checkboxes = page.locator("input[type='checkbox']");

const total = await checkboxes.count();

console.log(total);

//const secondCheckbox = page.locator("input[type='checkbox']").nth(1)
const checkedStatus = await firstCheckbox.isChecked()
console.log(checkedStatus)
})