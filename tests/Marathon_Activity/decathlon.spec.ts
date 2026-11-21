import { test, expect } from "@playwright/test";

test("Search product, apply filters, add to cart in Decathlon", async ({ page }) => {

    // Launch the browser and Navigate to https://www.decathlon.in/.
    await page.goto("https://www.decathlon.in/");

    // Verify the user is navigated to the Decathlon home page.
    await expect(page).toHaveURL("https://www.decathlon.in/");

    // Click on the Search icon on the home page.
    const searchbox = page.locator('//input[@data-test-id="search-input-desktop:container"]');

    await searchbox.click();

    //Enter the product name as "shoes" in the search field.
    await searchbox.fill("shoes");

    //Press Enter to search the product.
    await searchbox.press("Enter");

    //Capture and print the page title in the console.
    const title=await page.title();
    console.log("The page Title is:",title);

    //Verify the page title is displayed as "Search | shoes".
    await expect(page).toHaveTitle("Search | shoes");

    //Click on the "Running" category filter.
    await page.locator("//span[text()='Sport']").click();
    await page.locator("//span[text()='Running']").click();

    //Click on the "Men" gender filter
    await page.locator("//span[text()='Gender']").click();
    await page.locator("//span[text()='Men']/preceding-sibling::label").last().click();

    //Click on the shoe size filter "UK 10.5".
    await page.locator("//span[text()='Size']").click();
    await page.locator("//span[text()='10.5']").click();

    //Click on the "Most relevant" sorting dropdown.
    await page.locator("//span[text()='Most relevant']").click();

    //Select "Price: Low to High" from the sorting options.
    await page.locator("//span[text()='Price (low → high) ']").click();

    //Click on the first product from the displayed product list.
    await page.locator("//div[@data-test-id='product-card:product-card:title']").first().click();

    //Select the shoe size "UK 10.5 - EU 45" on the product detail page.
    await page.locator("//span[text()='Select size']/following::span[text()='10.5']").click();

    //Click on the "Add to Cart" button.
    await page.locator("//span[text()='Add to cart']").click();

    //Click on the Cart option.
    await page.locator("//span[text()='Cart']").click();

    //Fetch the total cart value.
    const cartValue = await page.locator("//div[@data-test-id='cart:cart-checkout-total-cart-value']").innerText();
    
    //Print the total cart amount in the console.
    console.log("Cart value is:",cartValue);
   
    await page.waitForTimeout(5000);
});