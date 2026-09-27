import {test,expect} from "@playwright/test";
 
test("Handling single selected dropdown", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

// select option from the dropdown 4 ways 
//await page.locator("#country").selectOption("India") // visible text

/*// using value
await page.locator("#country").selectOption({value:"india"}) 

//using label
await page.locator("#country").selectOption({label:'India'})

//using Index

await page.locator("#country").selectOption({index:2})
*/

2//check number of option in drpdown 
const DropdownOption = page.locator("#country option ")
await expect(DropdownOption).toHaveCount(10)

// get selected option 
await page.locator("#country").selectOption({ label: "India" });

const selectedoption = page.locator("#country option:checked")
console.log(await selectedoption.textContent())

})