import test from "@playwright/test";

import path from "path"

test("To learn upload without input tag",async({page})=>{

   await page.goto("https://blazorise.com/docs/components/file-picker");

   //To add listner
   const fileUploadPromise= page.waitForEvent("filechooser");

   //To open file chooser
    await page.locator("//span[text()='Choose files']").first().click();

    //To add await for fileUploadPromise as it returns promise
    const fileUpload = await fileUploadPromise;

    await fileUpload.setFiles(path.join(__dirname, "../../Data/Testleaf.png"));

});
