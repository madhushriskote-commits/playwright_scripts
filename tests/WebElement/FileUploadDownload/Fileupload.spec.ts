import {test,expect} from "@playwright/test";
 
test("File upload",async({page})=>{
await page.goto("https://testautomationpractice.blogspot.com/")

await page.locator("#singleFileInput").setInputFiles("C:\\Users\\HP\\Downloads\\checkbox.txt")

const singleFile= page.locator("#singleFileStatus")

await page.getByText("Upload Single File").click()

console.log(" File status :  ",await singleFile.innerText())
 })

 // o/p Single file selected: checkbox.txt, Size: 5939 bytes, Type: text/plain
// file not selected :  File status :   No file selected.

test("Multiple File Upload", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    // Upload multiple files
    await page.locator("#multipleFilesInput").setInputFiles([
        "test-data/alert.txt",
        "test-data/checkbox.txt",
        "test-data/list.txt"
    ]);

    // Click Upload button
    await page.getByText("Upload Multiple Files").click();

    // Verify status
    const multipleFileStatus = page.locator("#multipleFilesStatus");

    console.log("Multi File Status:");
    console.log(await multipleFileStatus.innerText());

});