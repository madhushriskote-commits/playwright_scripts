import {test,expect}from "@playwright/test";


test("Assignement 2",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

const male = page.locator("#male")
const female = page.locator("#female")

await male.check()

await expect(male).toBeChecked()
await expect(female).not.toBeChecked()

const malestatus = await male.isChecked()
const femalestatus = await female.isChecked()

console.log("Male :", malestatus)
console.log("Female",femalestatus)


})