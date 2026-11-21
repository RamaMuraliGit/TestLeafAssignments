import test from"@playwright/test";

test("To handle windows",async({page,context})=>{

    //To load th url
    page.goto("https://leafground.com/window.xhtml");
    
    //To click open button
    page.locator("//h5[text()='Click and Confirm new Window Opens']/following::button//span[text()='Open']").click();

    //To add listener to handle the new opened window
    const pagePromise=context.waitForEvent("page");

    //as it returns promise await us added and stored in a variable
    const pageWait=await pagePromise;

    //To add load for wait
    await pageWait.waitForLoadState();

    //To enter the value in new window
    await pageWait.getByRole("textbox",{name:"E-Mail address"}).fill("cccc");

    //To click send
    await pageWait.locator("//span[text()='Send']/parent::button").click();

    //To bring back to first page
    await page.bringToFront();

    await page.locator("//span[text()='Open Multiple']").click();

    await page.waitForTimeout(3000);


})