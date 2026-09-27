import { test, expect } from "@playwright/test";

test("Counting check box and check/uncheck", async ({ page }) => {

    await page.goto("file:///C:/Users/HP/Downloads/checkbox.html.html");

    const allCheckboxes = page.locator("input[type='checkbox']");

    const countLocator = await allCheckboxes.count();
    console.log("Total Checkboxes:", countLocator);

    for (let i = 0; i < countLocator; i++) {

        const checkbox = allCheckboxes.nth(i);

        const value = await checkbox.getAttribute("value");

        const beforeStatus = await checkbox.isChecked();

        console.log(`${value} Before : ${beforeStatus}`);

        if (beforeStatus) {
            await checkbox.uncheck();
        } else {
            await checkbox.check();
        }

        const afterStatus = await checkbox.isChecked();

        console.log(`${value} After : ${afterStatus}`);
    }

});
