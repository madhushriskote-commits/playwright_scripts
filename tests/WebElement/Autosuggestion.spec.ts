import {test,expect, Locator} from "@playwright/test";

test("Auto suggestion count ", async({page})=>{

await page.goto("https://www.google.com/")
//type text in textbox 
const searchBox = page.getByRole('combobox', { name: 'Search' });
await searchBox.fill('Playwright opening');// collection of suggestion 
// Wait until suggestions appear
await page.waitForSelector('li[data-view-type="1"]');

// Collection of suggestions
const autoSuggestion: Locator = page.locator("div.wM6W7d span");

const allCount = await autoSuggestion.count()

console.log("Number of Auto Suggestion :",allCount)

for(let i =0;i<allCount;i++)
{
    //each option text 
const optionText = await autoSuggestion.nth(i).textContent()
console.log(`Suggestion ${i + 1}: ${optionText}`);
}

})