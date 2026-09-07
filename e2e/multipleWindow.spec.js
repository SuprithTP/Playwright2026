import {test, expect } from "@playwright/test";

test("Multple tabs", async({browser}) =>{
    const context = await browser.newContext()
    const page1 = await context.newPage()
    await page1.goto("https://vinothqaacademy.com/multiple-windows/")
    
    const promise = context.waitForEvent("page")
    await page1.getByRole("button", {name: "New Browser Tab"}).click()


    const page2 = await promise
    await page2.waitForLoadState()
    expect(page2).toHaveURL("https://vinothqaacademy.com/webtable/")
    await page1.bringToFront()
    await page1.waitForTimeout(5000)
})


test("Framess", async({page}) =>{
    await page.goto("https://vinothqaacademy.com/iframe/")
    const frame1= page.frameLocator("//iframe[@src='https://vinothqaacademy.com/alert-and-popup/']")
    await page.waitForTimeout(3000)
    await frame1.locator("//button[.='Alert Box']").click()
})