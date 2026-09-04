import test from '@playwright/test';
import LoginPage  from '../Pages/LoginPage.js';

test("multiple elements", async({page}) =>{
    await page.goto("https://demoqa.com/webtables")
    const loginPage = new LoginPage(page);

    for(const elements of await loginPage.multipleElements.all())
    {
        var str = await elements.textContent()
        console.log(str)
    }
    for(let i=0 ;i<await loginPage.multipleElements.count() ; i++)
    {
        var str = await loginPage.multipleElements.nth(i).textContent()
        console.log(str)
    }

})
