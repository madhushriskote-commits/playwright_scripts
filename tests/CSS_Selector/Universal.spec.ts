import {test,expect} from "@playwright/test";

test("Practice Universal Selector",async({page})=>{
  await page.goto('file:///c:/Users/HP/Documents/HTML/Universal.html');
  const count = await page.locator("*").count();
  console.log(`Total Matched Element : , ${count}`)


})