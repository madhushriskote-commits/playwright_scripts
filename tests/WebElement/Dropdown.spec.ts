import { test, expect } from "@playwright/test";

test("Dropdown Test", async ({ page }) => {

    await page.goto("https://qa-practice.netlify.app/dropdowns");

    const dropdown = page.locator("#dropdown-menu");

    //using text
     await dropdown.selectOption("Afganistan");

    // using idex
    await dropdown.selectOption({index: 4})

    // select option using value
    await dropdown.selectOption({ value: "Afganistan" });

    // select using label
    await dropdown.selectOption({ label: "Afghanistan" });

    await expect(dropdown).toHaveValue("Afganistan");

    console.log(await dropdown.inputValue());

    await page.waitForTimeout(3000)


});