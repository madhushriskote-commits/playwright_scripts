import {test,expect} from "@playwright/test";
import { textSync } from "node:stream/iter";

test("Verify Items in MultiListbox",async({page})=>{
await page.goto("https://www.ebay.com/")
await page.waitForTimeout(3000)
await page.waitForLoadState("domcontentloaded");

await expect(page).toHaveURL(/ebay/)

let Expected_Item = 'craftsman'
let Item_Exit =false

const listbox = page.locator("#gh-cat")

//get all option from list 
const all_option = listbox.locator('option')

// count all option
const all_option_count = await all_option.count()
console.log("Total Options :", all_option_count);

//console.log("no of option in listbox",all_option_count.length)

for(let i = 0;i< all_option_count;i++){

    const text = await all_option.nth(i).textContent()
    console.log(text)
        if(text?.trim()==Expected_Item)

        {
            Item_Exit = true
            break
        }
    }
    console.log(Item_Exit); // op false
})

