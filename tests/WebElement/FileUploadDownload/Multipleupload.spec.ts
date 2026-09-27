import {test,expect} from "@playwright/test";
import path from "node:path";

test("File upload", async ({ page }) => {

const filePath = path.join(__dirname,"../../../test-data/alert.txt")
const filePath2 = path.join(__dirname,"../../../test-data/checkbox.txt")
const filePath3 = path.join(__dirname,"../../../test-data/list.txt")

await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
await page.waitForTimeout(3000)
await page.locator("#filesToUpload").setInputFiles([filePath,filePath2,filePath3])

const allFileText = await page.locator("ul#fileList li").allInnerTexts()
console.log(allFileText)

await expect(page.locator("ul#fileList li:first-child")).toBeVisible()

})