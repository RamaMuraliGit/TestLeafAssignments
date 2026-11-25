import test from "@playwright/test";
import fs from "fs";
import {parse} from "csv-parse/sync"

const csvData = fs.readFileSync("../../Data/LoginData.csv", "utf-8");

const csvRecords: any = parse(csvData, {
    columns: true,
    skip_empty_lines: true
});

for (let i = 0; i < csvRecords.length; i++) {
     test(`Test to verify login function ${i + 1}`, async ({ page }) => {
         await page.goto(csvRecords[i].url);

        // Locate the Username field and enter the username from the current CSV record.
        await page
            .locator("//label[text()='Username']/following-sibling::input")
            .fill(csvRecords[i].username);

        // Locate the Password textbox and enter the password from the current CSV record.
        await page
            .getByRole("textbox", { name: "Password" })
            .fill(csvRecords[i].password);

        // Enter the password using the label-based locator as an alternative approach.
        // await page.getByLabel("Password").fill(csvRecords[i].password);

        // Locate the Login button and click it.
        await page.getByRole("button", { name: "Login" }).click();
    });
}


