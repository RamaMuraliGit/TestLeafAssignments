import test from "@playwright/test";

test("Book Movie Ticket in PVR Cinemas ",async({page})=>{

//To access url
await page.goto("https://www.pvrcinemas.com/");

await page.locator("//h6[text()='Chennai']").click();

})