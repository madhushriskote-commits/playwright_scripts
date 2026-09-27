import test from "@playwright/test"

test("Handle alert",async({page})=>{

await page.goto("https://practice.expandtesting.com/js-dialogs")    

page.on("dialog", async(dialog)=>{

const alert_type = dialog.type()
console.log(alert_type)
console.log(dialog.message())
await dialog.accept();
})

  await page.getByRole("button", { name: "JS Alert" }).click();

})