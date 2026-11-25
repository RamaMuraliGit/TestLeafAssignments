// Import the test function from the Playwright Test package.
import test from "@playwright/test";

import LoginDetails from "../../Data/LoginDetails.json";

for(let i=0;i<LoginDetails.length;i++){

// Create an asynchronous test case to verify the Create Lead functionality.
test(`Test to verify the create lead ${i+1}`, async ({ page }) => {

    // Navigate to the LeafTaps application URL.
    await page.goto(LoginDetails[i].url);

    // Enter the username into the Username textbox.
    await page.getByRole("textbox", { name: "Username" }).fill(LoginDetails[i].username);

    // Enter the password into the Password textbox.
    await page.getByRole("textbox", { name: "Password" }).fill(LoginDetails[i].password);

    // Click the Login button to submit the login form.
    await page.getByRole("button", { name: "Login" }).click();

    // Pause the test execution for 5000 milliseconds (5 seconds).
    await page.waitForTimeout(5000);

});}