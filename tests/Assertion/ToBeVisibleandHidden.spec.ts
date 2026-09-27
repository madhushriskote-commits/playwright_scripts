import {test,expect} from "@playwright/test";


test("Element is Visible or Hidden",async({page})=>{
await page.goto("https://qa-practice.netlify.app/register")

 const heading = page.getByRole("heading",{name:"Register Form"})
 await expect(heading).toHaveText("Register Form")
 //await page.locator("h2", { hasText: "Register Form" });

 const Firstname =  page.locator("#firstName")
 await expect(Firstname).toBeVisible()
 await Firstname.fill("Madhushri")
 await expect(Firstname).toHaveValue("Madhushri")

 const Last_name = page.getByPlaceholder("Enter last name")
 await expect(Last_name).toBeVisible()
 await Last_name.fill("kote")

  const email = page.getByPlaceholder("Enter email");

await expect(email).toBeVisible();
await email.fill("krishnavkote@gmail.com");

})