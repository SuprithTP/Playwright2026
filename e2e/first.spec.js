import {test,expect} from '@playwright/test';

test.skip('Checking the url', async ({page}) => {

    await page.goto('https://testclient5-oversight.qa.lokavant.com/')
    // await expect(page).toHaveTitle('STORE')
    var  pageTitle = await page.title()
    console.log(pageTitle,"Page title");

    await page.click("//button[.='Log In']")
    await page.fill("(//input[@id='signInFormUsername'])[2]","rishwan.k@lokavant.com")
    await page.fill("(//input[@id='signInFormPassword'])[2]","Test#123")
    await page.click("(//input[@name='signInSubmitButton'])[2]")
    await page.waitForSelector("//th[.='Workload Item']")
    await page.click("//div[@class='uppercase text-gray-300' and .='rishwan.k@lokavant.com']")
    await page.click("//a[text() = 'Open Trial Intelligence Platform']")
    await page.waitForSelector("//div[@class='px-4 py-8']//div[@class='flex items-center my-0 rounded']/a")


    //selecting multiple web element 
    
    var allModules = await page.$$("//div[@class='px-4 py-8']//div[@class='flex items-center my-0 rounded']/a")
    
    for(var allmoduleNames of allModules)
    {
        var moduleNames = await allmoduleNames.textContent()
        console.log(moduleNames,"Modules");
    }
    var txtPortfolio = await page.locator("//h1").textContent()    
    await expect(txtPortfolio).toBe("Portfolio")
    // await page.waitForTimeout(7000)
    await page.click("//*[@data-icon='menu']//parent::button")
    await page.click("//span[.='Study Planning']")
    await page.click("//a[@href and .='Create Study Forecast']")
    await page.waitForSelector("#forecast_years_limit")
    await page.selectOption("#forecast_years_limit","6 years")
    // var frame1 = await page.frame({url:"https://app.hubspot.com/conversations-visitor/22563181/threads/utk/e5c232a774634e379814c79bebad9818?uuid=a51f6ec991d548bfa500fed7e1aa7660&mobile=false&mobileSafari=false&hideWelcomeMessage=false&hstc=184462137.3e84be91a7f9c79429899a0ce2678cc9.1754969625417.1756821570403.1756874775422.41&domain=testclient5-oversight.qa.lokavant.com&inApp53=false&messagesUtk=e5c232a774634e379814c79bebad9818&url=https%3A%2F%2Ftestclient5-oversight.qa.lokavant.com%2F&inline=false&isFullscreen=false&globalCookieOptOut=&isFirstVisitorSession=false&isAttachmentDisabled=false&isInitialInputFocusDisabled=false&enableWidgetCookieBanner=false&isInCMS=false&hideScrollToButton=true&isIOSMobile=false&hubspotUtk=3e84be91a7f9c79429899a0ce2678cc9"})
    // await frame1.click("//button[@aria-haspopup='dialog']")
    // await frame1.fill("//div[@data-test-id='widget-textarea']",'Hiiiii')
    // await page.waitForTimeout(5000)
    // await page.close()


    //different ways to locate the elements

    //getByAltText()
    //getByRole()
    //getByPlaceholder()
    //getByText()
    //getByTestId()

    //



    //frequently used HARD assertions
    // expect().toHaveURL("url")
    // expect().toHaveTitle("titlename")
    // expect().toBeVisible()
    // expect().toBeEnabled()
    // expect().toBeDisabled()
    // expect().toBeEmpty()
    // expect().toBeEditable()
    // expect().toBeChecked()  // for radio button or checkbox selection
    // expect().toHaveAttribute("Attribute name")
    // expect().toHaveText("Exact text")
    // expect().toContainText("Partial text")
    // expect().toHaveValue("Value") // Input box has value or not will be checked
    // expect().tohaveCount("Count") //checks count of options



    //how to handle dropdowns

   // 1. by using selectOption 
           //  await page.selectOption("xpath","text")
        //  await page.locator("xpath").selectOption("text")
      //  await page.locator("xpath").selectOption({label:'text'})
      //  await page.locator("xpath").selectOption({value:'valuetext'})
      //  await page.locator("xpath").selectOption({Index:'Indexnumber'})


      //how to handle multiselect dropdowns

      //await page.selectOption("Xpath",["text1","text2","text3"])


      //how to handle boot strap multiselect dropdowns

        //by using the xpaths 

      //how to handle auto sugesstion  dropdowns

         // by using the waitForSelector() and printing all the options using foreach loop and if condirtion to match the value and click the matched option
 
    
      //how to handle hidden items in dropdowns

         // by using debugger and pause and take the xpath and follow the same steps to select the options









})
