import test, {expect } from "@playwright/test";
 
test("Browser tab",async({page})=>{ 

    await page.goto("https://qaplayground.com/practice/tabs-windows")

    const popuppromise = page.waitForEvent("popup")
    await page.getByRole("link",{name:"🔗 Open in New Tab"}).click()
    const popup= await popuppromise

    await popup.waitForLoadState()
   
    console.log(popup.title())

    console.log(popup.url())

    await expect(popup).toHaveTitle("How to Handle Tabs and Windows in Selenium and Playwright | QA Playground")

})

test("Browser context demo",async({context,page})=>{ 

    await page.goto("https://qaplayground.com/practice/tabs-windows")

    const popuppromise = context.waitForEvent("page")
    await page.getByRole("button",{name:"🪟 Open Popup Window"}).click()
    const popup= await popuppromise

    await popup.waitForLoadState()
   
    console.log(popup.title())

    console.log(popup.url())

    await expect(popup).toHaveTitle("How to Handle Tabs and Windows in Selenium and Playwright | QA Playground")

})