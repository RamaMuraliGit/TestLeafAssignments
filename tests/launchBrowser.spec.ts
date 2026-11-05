import test, { chromium } from "@playwright/test";

test("Test to verify login",async({page})=>{

    // let browser=await chromium.launch();

    // let context=await browser.newContext();

    // let page=await context.newPage();

    await page.goto("https://www.facebook.com/");
})
