import {test,expect} from "@playwright/test";
 
test('Verify Title',async({page})=>{
await page.goto("https://playwright.dev/",{waitUntil:"load"})
await page.waitForTimeout (3000)
const expected_title ='Playwright'
const actual_title :string = await page.title()
  if(expected_title===actual_title)
    {
        console.log ("title is matched")
    }  else
        console.log("title is not matched")
})