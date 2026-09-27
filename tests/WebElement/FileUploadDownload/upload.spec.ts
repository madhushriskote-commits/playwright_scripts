import { test, expect } from "@playwright/test";
import path from "path";

test("File upload", async ({ page }) => {

const filePath = path.join(__dirname,"../../../test-data/alert.txt")

    await page.goto("https://qa-practice.netlify.app/file-upload");

    await page.locator("#file_upload").setInputFiles(filePath);

    const submit =  await page.getByRole("button", { name: "Submit" }).click();

    // Verify uploaded file name
    const uploadedFile = await page.locator("#file_upload").inputValue();

    console.log("Uploaded File:", uploadedFile);

    // file uploaded response

    const response = page.locator("#file_upload_response")
    console.log(await response.innerText())
});
// o/p Uploaded File: C:\fakepath\alert.txt
// You have successfully uploaded "alert.txt"