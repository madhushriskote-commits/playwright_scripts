import {test,expect} from "@playwright/test";

test("Verify URL and Content",async({page})=>{
await page.goto("https://qa-practice.netlify.app/register")
 await expect(page).toHaveURL(/register/);

const heading = page.getByRole("heading", {
    name: "Register Form"});

await expect(heading).toHaveText("Register Form");

const firstName = page.getByLabel("First Name");

await expect(firstName).toBeVisible();
await firstName.fill("Madhushri");
await expect(firstName).toHaveValue("Madhushri");

const lastName = page.getByPlaceholder("Enter last name");
await lastName.fill("Kote")

await expect(lastName).toHaveValue("Kote");

const phoneNumber = page.getByLabel("Phone number");

await expect(phoneNumber).toBeVisible();
await phoneNumber.fill("9456255823");
await expect(phoneNumber).toHaveValue("9456255823");

const email = page.getByPlaceholder("Enter email");

await expect(email).toBeVisible();
await email.fill("krishnavkote@gmail.com");
await expect(email).toHaveValue("krishnavkote@gmail.com");
})