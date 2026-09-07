import  { test, expect}  from '@playwright/test';


test("DialogHandler", async({page}) =>{
    await page.goto("https://demoqa.com/alerts")
    page.on("dialog", async(dialog) =>{
        expect(dialog.message()).toContain("You clicked a button")
        await dialog.accept()

    })
    await page.locator("(//*[.='Click me'])").nth(1).click()
})