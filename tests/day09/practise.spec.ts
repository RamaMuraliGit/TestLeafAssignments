import test from "playwright/test"

test("To practise",async({page})=>{

    await page.goto("https://leaftaps.com/opentaps/control/main");

    //To entr the username

    await page.getByRole("textbox",{name:"Username"}).fill("Demosalesmanager");

    //To enteer password
     await page.locator("#password").fill("crmsfa");

     //To clock login

     await page.getByRole("button",{name:"Login"}).click();

     //To click CRM

     await page.getByText("CRM/SFA").click();

     //To click Leads Tab

     await page.getByText("Leads",{exact:true}).click();

     //To create Lead
     await page.getByText("Create Lead",{exact:true}).click();

     await page.locator("#createLeadForm_dataSourceId").selectOption({label:"Direct Mail"});
     



})