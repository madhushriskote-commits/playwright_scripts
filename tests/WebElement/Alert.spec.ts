import {test,expect} from "@playwright/test";

test("Verify alert", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await expect(page).toHaveURL(/javascript_alerts/)
 
    //create dialog lister
    page.on("dialog",async(dialog)=>
    {
        const alert_type =await dialog.type() // alert type
        console.log(alert_type)
        const message = await dialog.message()//message
        console.log(message)
        await dialog.accept()
    })

    const loctor = await page.getByText("Click for JS Alert").click()
  //  page.waitForTimeout(3000)
    const text_result= page.locator("#result").textContent()
    console.log(text_result)
})

test("Verify confirm", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await expect(page).toHaveURL(/javascript_alerts/)
 
    //create dialog lister
    page.on("dialog",async(dialog)=>
    {
        const alert_type =await dialog.type() // alert type
        console.log(alert_type)
        const message = await dialog.message()//message
        console.log(message)
        await dialog.dismiss()
    })

    const loctor = await page.getByText("Click for JS Confirm").click()
  //  page.waitForTimeout(3000)
    const text_result= page.locator("#result").textContent()
    console.log(text_result)
})

test("Verify promot", async({page})=>{
    await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
    await expect(page).toHaveURL(/javascript_alerts/)
 
    //create dialog lister
    page.on("dialog",async(dialog)=>
    {
        const alert_type =await dialog.type() // alert type
        console.log(alert_type)
        const message = await dialog.message()//message
        console.log(message)

        dialog.accept("Madhushri")
       // dialog.dismiss()
    })

    const loctor = page.getByText("Click for JS Prompt").click()
  //  page.waitForTimeout(3000)
    const text_result= page.locator("#result").textContent()
    console.log(text_result)
    const actual_result = await expect(page.locator("#result")).toHaveText(/Madhushri/)
})

