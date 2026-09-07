import {test, expect,chromium } from "@playwright/test";

test("Muliple window", async () =>{
    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page1 = await context.newPage()


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")
     
    const pagepromise = context.waitForEvent("page")
    await page1.locator("//a[.='OrangeHRM, Inc']").click()
    const page2 = await pagepromise
    expect(page2).toHaveTitle("OrangeHRM: All in One HR Software for Businesses | OrangeHRM")
    await page2.waitForTimeout(5000)
    await page2.screenshot({path:"test-results/screenshot.png"})
})







//await page1.bringToFront()  for travel from window to window