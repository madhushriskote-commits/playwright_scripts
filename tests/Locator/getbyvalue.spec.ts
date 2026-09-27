import {test,expect} from "@playwright/test";

test("GetbyValue",async({page})=>{
    await page.goto("https://qa-practice.netlify.app/register")
    await page.waitForTimeout(3000)
    await page.getByRole('textbox', { name: 'First Name' }).fill('Madhushri');
})
