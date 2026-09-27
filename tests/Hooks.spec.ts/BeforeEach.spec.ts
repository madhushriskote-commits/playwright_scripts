import {test,expect} from "@playwright/test";
 
test.beforeEach(async({page})=>
{
await page.goto("https://qa-practice.netlify.app/register")
await page.waitForTimeout(2000)
})  

test('hooks',async({page})=>{
await page.getByPlaceholder("Enter first name",{exact:true}).fill("Madhushri")

})
test('hooks1',async({page})=>{
await page.locator("#api-testing").click()
})