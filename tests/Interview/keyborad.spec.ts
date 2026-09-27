import test, { expect } from "@playwright/test";


test("Keyboard Action",async({page})=>{

    await page.goto("https://qa-practice.netlify.app/auth_ecommerce")
    const Email = page.getByRole("textbox",{name:"Email"})
    await Email.fill("admin@admin.com")
    console.log(await Email.inputValue())
    await expect(Email).toHaveValue("admin@admin.com")

    const Password = page.getByRole("textbox",{name:"password"})
    await Password.fill("admin123")
    console.log(await Password.inputValue())
    expect(Password).toHaveValue("admin123")

    const submit = page.getByRole("button",{name:"Submit"})
    await submit.press("Enter")

    await expect(page).toHaveURL("https://qa-practice.netlify.app/auth_ecommerce");


    page.keyboard.press("Control+A")

   
})