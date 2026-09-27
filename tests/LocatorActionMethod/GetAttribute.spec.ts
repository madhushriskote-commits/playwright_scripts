import {test,expect} from "@playwright/test";

test("Get Attribut",async({page})=>{

    await page.goto("https://qa-practice.netlify.app/register")
    const attribut = await page.locator("#firstName").getAttribute("placeholder")
    console.log(attribut)

})