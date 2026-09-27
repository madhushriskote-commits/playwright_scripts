import {test,expect, Locator}from "@playwright/test";

test("Assignement 2",async({page})=>{
await page.goto("https://qa-practice.netlify.app/radiobuttons")
 
//verify radio button 1 is checked or not
const radiobtn1 = await page.locator("#radio-button1").isChecked()
console.log("Radio button 1 status is checked :",radiobtn1)

//verify radio button4 is disabled
const radiobtn4 = await page.locator("#radio-button4").isDisabled()
console.log("Radio button 4 status is disabled :",radiobtn4)

//verify radio button 3 is checked or not
const radiobtn3 = await page.locator("#radio-button3").isChecked()
console.log("Radio button 3 status is checked :",radiobtn3)

//all radio button
const allradiobtn: Locator = page.locator('input[type="radio"]')
// count no checkbox 
const countbtn = await allradiobtn.count()
console.log("radio button count",countbtn)

for(let i=0;i<countbtn;i++)
{

    const radio = allradiobtn.nth(i);

    const value = await radio.getAttribute("value");
    const checked = await radio.isChecked();
    const disabled = await radio.isDisabled();

    console.log( `${value} -> Checked: ${checked}, Disabled: ${disabled}`)
}


})