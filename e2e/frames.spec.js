import test from '@playwright/test';

test("Framess", async({page}) =>{
    await page.goto("https://vinothqaacademy.com/iframe/")
    const frame1= page.frameLocator("//iframe[@src='https://vinothqaacademy.com/alert-and-popup/']")
    await page.waitForTimeout(3000)
    await frame1.getByRole("button", {name: "Alert Box"}).click()
})
