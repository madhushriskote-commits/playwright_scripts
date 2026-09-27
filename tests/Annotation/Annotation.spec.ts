import test from "@playwright/test";
 
test.beforeEach("Before Each exmple",async({page})=>{
await page.goto("http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login")
await page.locator("#txtUsername").fill("Admin")
await page.locator("#txtPassword").fill("Qedge123!@#")
await page.locator("#btnLogin").click()
})

test.describe("OrangeHrm test",()=>{
    test.describe.configure({
    mode :"serial",
    timeout:30000,
    retries:2
    }

    )
 test("Admin",async({page})=>{
    test.slow()
    await page.getByRole('link',{name:'Admin'}).click()
    console.log("Admin Click")
 })   

  test.skip("PIM",async({page})=>{
    await page.getByRole('link',{name:'PIM'}).click()
    console.log("PIM Click")
 })   

  test.only("Leave",async({page})=>{
    await page.locator("#menu_leave_viewLeaveModule").click()
    console.log("PIM Click")
 })   

})