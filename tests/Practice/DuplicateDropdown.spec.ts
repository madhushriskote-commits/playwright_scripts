import {test,expect} from "@playwright/test";
 
test("Handling duplicate drop", async({page})=>{

await page.goto("https://testautomationpractice.blogspot.com/")

const Dropdownlist = page.locator("#colors option")

const option =await Dropdownlist.allTextContents()

const count_red = await page.locator("#colors option",{hasText:"red"}).count()
console.log("count of red",count_red)

 const optionText:string[]=(await Dropdownlist.allTextContents()).map(text=>text.trim())

 const myset = new Set<string>();// set - duplicate not allowed unique
 const duplicate: string[]=[]; // array duplicate allowed 

 for (const text of optionText) {
    if(myset.has(text))
    {
        duplicate.push(text);
    }
    else{
        myset.add(text)
    }
 }
 console.log("Myset is :",myset)
 console.log("Duplicate is",duplicate)
})