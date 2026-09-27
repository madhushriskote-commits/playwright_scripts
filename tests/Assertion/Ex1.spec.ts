import {test,expect} from "@playwright/test";

test("Test Assertion",async({page})=>{

await page.goto("https://qa-practice.netlify.app/auth_ecommerce")
await expect(page).toHaveURL(/auth_ecommerce/)
const currentURL = page.url();
console.log(currentURL);

const email = page.getByLabel("Email")
await expect(email).toBeVisible()
await email.fill("admin@admin.com")
const email_value =await email.inputValue()
console.log(email_value)


const password = page.getByPlaceholder("Enter Password - insert admin123")
await expect(password).toBeVisible()
await password.fill("admin123")
await expect(password).toHaveValue("admin123")
const PasswordValue =await email.inputValue() // op: admin@admin.com
//console.log(PasswordValue)

const submit = page.getByRole("button", { name: "Submit" })
await expect(submit).toBeVisible()
await submit.click({force:true})

await expect(page.getByRole("heading",{name:"SHOPPING CART"})).toHaveText(/SHOPPING CART/)
//const heading = page.locator("h2", {    hasText: "SHOPPING CART"});
})