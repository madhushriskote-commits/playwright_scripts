import {test,expect} from "@playwright/test";
 
test("Amazon Auto suggestion",async({page})=>{
    await page.goto("https://www.amazon.in/")

    // located search box and enter data
    const searchBox  = page.locator("#twotabsearchtextbox")
    await searchBox.fill("Mobile Phone")

    // collection of auto suggestion 
    const allSuggestion = page.locator(".s-suggestion.s-suggestion-ellipsis-direction")

    // wait for selector
    await allSuggestion.nth(1).waitFor();

    //count 
    const countAllSuggestion= await allSuggestion.count()
    console.log("Count of all suggestion", countAllSuggestion)

    for ( let i =0; i<countAllSuggestion;i++)
    {
       const eachSuggestion = await allSuggestion.nth(i).innerText()
       console.log(`${i+1}:${eachSuggestion}`)
    }

})