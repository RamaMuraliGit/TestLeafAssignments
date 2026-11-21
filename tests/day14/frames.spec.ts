import test from "@playwright/test";

test("To learn frames",async ({page}) =>{

   await page.goto("https://leafground.com/frame.xhtml");
   
   await page.waitForTimeout(5000);

   //To get inside the frame

   let framereference =  page.frameLocator("[src='default.xhtml']");

   await framereference.getByRole("button",{name:"Click Me"}).click();

})