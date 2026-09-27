import test, { expect } from "@playwright/test";

test("File uploading",async({page})=>{

await page.goto("https://practice-automation.com/file-upload/")

const fileLocator= page.locator('input[name="file-941"]')

await fileLocator.setInputFiles("C:/Users/HP/Downloads/July_16.txt")
await expect(fileLocator).toHaveValue(/July_16\.txt/)
const uploadbtn = await page.getByRole("button",{name:'Upload'}).click()
const message = page.locator(".wpcf7-response-output")
await expect(message).toBeVisible();
await expect(message).toHaveText("Thank you for your message. It has been sent.");

console.log(await message.textContent())
})