import {test,expect} from "@playwright/test";


test('Test case Tilte', async function({page}){
  await page.goto("https://www.google.com");
  const page_title = await page.getByTitle("Search").click()
  console.log(page_title);
  await expect(page).toHaveTitle(/Google/);

})