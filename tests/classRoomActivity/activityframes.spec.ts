import test from "@playwright/test";

test("To learn frames",async ({page}) =>{

   await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm");
   
   await page.waitForTimeout(5000);

   const frameref= page.frameLocator("//iframe[@id='iframeResult']");


   //To handle confirm dial

   page.on("dialog",async(dialog)=>{

   console.log(dialog.message());

   await dialog.accept();
   });

   await frameref.getByRole("button", { name: "Try it" }).click();
   });