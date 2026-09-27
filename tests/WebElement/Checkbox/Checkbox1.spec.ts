import { test, expect, Locator } from "@playwright/test";

test("Check box selection", async ({ page }) => {

    await page.goto("https://mail.rediff.com/cgi-bin/login.cgi");

    const checkbox: Locator = page.locator("#remember");

    // Verify checkbox is checked by default
    await expect(checkbox).toBeChecked();

    // Get checkbox status
    const status: boolean = await checkbox.isChecked();
    console.log("Check Box Status:", status);

    // Uncheck
    await checkbox.uncheck();

    // Verify unchecked
    await expect(checkbox).not.toBeChecked();

    await page.waitForTimeout(3000);

    // Check again
    await checkbox.check();

    // Verify checked
    await expect(checkbox).toBeChecked();
});