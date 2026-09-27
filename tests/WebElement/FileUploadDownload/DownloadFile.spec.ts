import {test,expect} from "@playwright/test";
 
 
test("File Download",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/p/download-files_25.html") 

const heading = page.getByRole("heading",{name:"PDF File with the Browser"})
// Verify heading
await expect(heading).toHaveText("PDF File with the Browser")

// Create download promise (don't await here)
const downloadPromise = page.waitForEvent("download")

// Click download button
const downloadbutton = page.getByText("Download PDF File").nth(1)
await downloadbutton.click()

console.log(await downloadbutton.count())

// Wait for download to complete
const download = await downloadPromise

//Save Downloaded file
await download.saveAs("downloads/report.pdf")


})