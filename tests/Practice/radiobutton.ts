import {test,expect} from "@playwright/test";

test("Verify Radio button selection",async({page})=>{
 await page.goto("https://practice.expandtesting.com/radio-buttons")
 
 //Locator 
 const  blueRadioButton = page.locator("input[type='radio'][value='blue']")
 const redRadioButton = page.locator("input[type='radio'][value='red']")
 const yellowRadioButton = page.locator("input[type='radio'][value='yellow']")

 //select yellow
 await yellowRadioButton.check()
 console.log("yellow radio button status :",await yellowRadioButton.isChecked())
// assertion for yellow
 await expect(yellowRadioButton).toBeChecked()

 // assertion for blue not checked
 await expect(blueRadioButton).not.toBeChecked()

 //select red 
 await redRadioButton.check()
 //verify yellow is unchecked() 
 console.log("radio button is checked ? :",await yellowRadioButton.isChecked())
 await expect(yellowRadioButton).not.toBeChecked()
})

test("verify sport radio button", async({page})=>{
 await page.goto("https://practice.expandtesting.com/radio-buttons")
 const tennisRadioButton = page.getByRole('radio',{name:"Tennis"})

 await tennisRadioButton.check();

await expect(tennisRadioButton).toBeChecked();
})