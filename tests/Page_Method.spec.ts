import {test,expect} from "@playwright/test";
import { time } from "node:console";

test('check page methods',async({page})=>{

    // launch URL
    await page.goto('https://www.tatacliq.com/',{ waitUntil : 'load',timeout : 30000})
    // suspend for 3 second
    await page.waitForTimeout(3000)
    // print page title and length of title 
    const page_title = await page.title()
    console.log("Page Title : ",page_title)
    console.log("Title Length",page_title.length)

    // print url and length of url 
      const Page_URl : string= await page.url()
      console.log(Page_URl)
})  