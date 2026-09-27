import {test,expect} from "@playwright/test";

test("Retrive Value from TextBox",async({page})=>{
    await page.goto("https://qa-practice.netlify.app/register")
    await page.getByLabel("First Name").fill("Madhushri")
    const input_value = await page.locator("#firstName").inputValue()
  
    console.log(input_value)
   expect(input_value).toBe("Madhushri");

})