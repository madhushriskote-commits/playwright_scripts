import test from "@playwright/test";

 
 test("Enviorement setup test",async({page})=>{
 await page.goto(process.env.BASE_URL!)
 await page.locator(process.env.USERNAME_ID!).fill(process.env.USERNAME!)
 //await page.waitForTimeout(30000)
 await page.locator(process.env.PASSWORD_ID!).fill(process.env.PASSWORD!)
 await page.locator(process.env.LOGIN_ID!).click()
 })
