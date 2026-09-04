import { test,expect } from "@playwright/test";
import  LoginPage  from "../Pages/LoginPage";

test("POM Login", async({page}) =>{
    const loginPage = new LoginPage(page)
    await page.goto("https://testclient5-oversight.qa.lokavant.com/")
    await loginPage.login("rishwan.k@lokavant.com","Test#123")
    await page.waitForSelector("//th[.='Workload Item']")


})