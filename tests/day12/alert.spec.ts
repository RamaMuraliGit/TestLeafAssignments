import test from "@playwright/test";

// Create a Playwright test.
test("Test to learn alert", async ({ page }) => {

    // Navigate to the LeafGround Alert page.
    await page.goto("https://leafground.com/alert.xhtml");

     page.on("dialog", async (dialogAlert) => {

    switch(dialogAlert.type()){  
    case"alert":
    dialogAlert.accept();
    console.log("This is simple alert");
    break;

    case"confirm":
    dialogAlert.dismiss();
    console.log("This is confirm alert");
    break;

    case"prompt":
    dialogAlert.accept("Rama");
    console.log("This is prompt alert");


     }

     })



})