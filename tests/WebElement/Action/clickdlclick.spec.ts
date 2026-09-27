import { test, expect } from "@playwright/test";

test("Action click Methods", async ({ page }) => {

    await page.goto("https://www.myntra.com/")
    await page.waitForTimeout(3000)
    const men = page.locator("a[data-group='men']");
    await men.hover();
    await page.getByRole("link", { name: "T-Shirts" }).click();
})