import {test,expect} from "@playwright/test";

test("collection of link",async({page})=>{

    await page.goto("https://qa-practice.netlify.app/register")

    // get collection of link store on html page 

    const link = await page.locator("a")
    const count = await link.count()
    console.log(`no of links ${count}`)

    for(let i =0; i<count;i++)
    {
        //capture link text
        const linkname = await link.nth(i).innerText()
        console.log(`link index ${i} : ${linkname}`)
    }

})