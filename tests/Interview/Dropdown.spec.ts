import {test,expect} from "@playwright/test";

test("Dropdown test",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")
const option = page.locator("#country")

option.selectOption({label:"Japan"})

 // Verify selected value
await expect(option).toHaveValue("japan");

    // Verify selected visible text
await expect(option.locator("option:checked")).toHaveText("Japan");


await expect(option).toHaveCount(10)

})

test("Verify all dropdown options",async({page})=>
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const option = page.locator("#country option")
    const count = await option.count()
    console.log("Count of all option :",count)
// get all option 

    const alloption = await option.allTextContents()
    const trimmedOptions = alloption.map(text => text.trim());

    console.log("All option:",trimmedOptions)
}) 

test("using filter",async({page})=>{
    await page.goto("https://qa-practice.netlify.app/register")
    const option = page.locator("#countries_dropdown_menu")
    await option.filter({hasText:"Austria"}).click()
    await expect(option).toHaveValue("Austria")
})

test("custom dropdown using filter", async ({ page }) => {

    await page.goto("https://demoqa.com/select-menu");

    const dropdown = page.locator("#withOptGroup");

    await dropdown.click();

    const options = page.getByRole("option");

    const selection = options.filter({ hasText: "Group 1, option 1" });

    await expect(selection).toBeVisible();

    await selection.click();
});