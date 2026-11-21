import test from "@playwright/test";

import path from "path";

test("To learn upload with input tag",async({page})=>{

    await page.goto("https://demoqa.com/upload-download");

    await page.getByRole("button", { name: "Choose File" }).setInputFiles(path.join(__dirname, "../../Data/Testleaf.png"));
});