import test from '@playwright/test'
import expect from '@playwright/test'

test("InnerFrames", async({page}) =>{

    await page.goto("https://ui.vision/demo/webtest/frames/")
    var frame3= page.frame({url:"https://ui.vision/demo/webtest/frames/frame_3.html"})       // using names or url we cab access the frames
    await frame3.fill("//input[@name='mytext3']", "Hiiii")
    var child= frame3.childFrames()
    await child[0].fill("//input[@aria-label='Other response']","I am Suprith")
    await page.waitForTimeout(3000)

})



// dialog function for handling the dialogs(alert,confirm,prompt)

//enabling alter handler or dialog window handler
 
await page.on('dialog', async (dialog) =>{
    expect(dialog.type()).toContain('Alert')
    expect(dialog.message()).toContain('Message')
    await dialog.accept() 
    await dialog.dismiss()


    //if we want to provide the value in prompt we can use 
    expect(dialog.defaultValue()).toContain("Default value")   //to check the default value in prompt dilog text box
    await dialog.accept("Value to pass")

})


//filter function for filtering out the elements



const rows = await page.locator('//table//tr')  // captures all the rows in the table
var matchedRow =await rows.filter({             
    has: page.locator('td'),                    // filters all the rows which has columns data or table data in the table
    hasText: 'Product 4'                        // filters the  rows which has the text as Product 4
})
await matchedRow.locator('input').check()       // check the radio btn or check box of the row which has text as product 4





for(i=0 ; i<rows.count() ; i++)
{
    var row = rows.nth(i)        
    var tds = row.locator('td')   // await page.locator('tr[i]//td')
    for(j=0 ; j<tds.count() ; j++)
    {
        console.log(await tds.nth(j).textContent())
    }

}






/*

mouse hover operations

1) for hovering ->> await element.hover()

2) for doubleclick ->> await element.dblClick()

3) for right or left click ->> await element.click({button: 'right'})

4) for drag and drop ->> await sourceelement.dragTo(destinationelement)

4 a) 2nd approach for drag and drop ->> await sourcelement.hover()
                                        await page.mouse.down()
                                        await destinationelement.hover()
                                        await page.mouse.up()
*/


/*

Keyboard actions    


await page.keyboard.press('Control+A')
await page.keyboard.press('Control+C')

await page.keyboard.down('Tab')
await page.keyboard.up('Tab')

*/  


/*

for uploading files


we can use >> 
await page.locator("input elements").setInputFiles('filepath')

await page.locator("input elements").setInputFiles(['filepath1','filepath2])

*/




/*

hooks:>>
while using before or after hooks you should start like :>>
*test.beforeAll()

*And you should not use 'page fictior' inside first hook(before hook) instead we should use browser fictior like >> test.beforeEach(async {browser}{  })

* once you create page object or page ficatior inside first hook(before hook) you should not use the page fictior in the other tests
 you should keep it empty lik >> test("first test", async() =>{ }) 
 
* only one time you should create the page fictior otherwise multiple instances it will create >> let page;
                                                                                                 page = await browser.newPage()

* thw way to crate a page fictior inside the firt hook(before hook) >> var page = await browser.newPage()

*/




/* 

describe block 
describe block is used to group the task and we should not create async function instid only function we need mention
    test.describe("1st group", ()={
    
    beforeall()
    test(test1)
    test(test2)
    afterall()
    
    })

*/


/* 

adding the screenshots

await page.screenshot({path:'path'})
await page.screenshot({path:'path', fullpage:true})'
await page.locator("xpath").screenshot({path:'path'})


or 

we can add the screenshot  in config file as well >> screenshot:on



adding the video 

same like screenshot we can configure video in config file
>> video:on
or 
video:'retain-on-failure
'

*/
