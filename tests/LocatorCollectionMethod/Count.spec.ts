import { test } from "@playwright/test";

test("Print all links and URLs", async ({ page }) => {

    await page.goto("https://qa-practice.netlify.app/register");

    const links = page.locator("a");

    const totalLinks = await links.count();

    console.log(`Total Links: ${totalLinks}`);

    for (let i = 0; i < totalLinks; i++) {

        const currentLink = links.nth(i);

        const linkText = await currentLink.innerText();

        const url = await currentLink.getAttribute("href");

        console.log(`Link ${i}`);
        console.log(`Text : ${linkText}`);
        console.log(`URL  : ${url}`);
        console.log("----------------");
    }

})
 

    test('Counting Links1',async({page})=>{
    await page.goto('https://facebook.com/',{waitUntil:'load'})
    await page.waitForTimeout(3000)
    //get collection of links in a webpage which are stored into Html tag a
    const all_Links = page.locator('a')
    //count no of links and text
    const count_links = await all_Links.allTextContents()
    console.log(`No of links are ${count_links.length}`)
    for (const element of count_links) {
        console.log(element)
        
    }
})
 