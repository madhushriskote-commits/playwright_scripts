import {test,expect} from "@playwright/test";

test("Check Visiblity",async({page})=>{

    await page.goto("https://qa-practice.netlify.app/register")
    const Isvisible = await page.locator("#firstName").isVisible
    console.log(Isvisible)

})