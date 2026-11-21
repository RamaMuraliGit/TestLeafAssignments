import test from "@playwright/test";

import path from "path"

test("To learn File Download",async({page})=>{

    //To load the page
    await page.goto("https://demoqa.com/upload-download");

    //To add event listner
    const downloadPromise=page.waitForEvent("download");

    await page.getByRole("button", { name: "Download" }).click();

    const download = await downloadPromise;

    await download.saveAs(path.join(__dirname,`../../Downloads/${download.suggestedFilename()}`));


})
