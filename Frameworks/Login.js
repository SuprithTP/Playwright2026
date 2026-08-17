class Login{

      constructor(page)
    {
        this.page = page
    }

async websiteLogin(username,password){
    await this.page.goto("https://www.intellitrans.com/transportation-management-software/")
    await this.page.waitForLoadState("load")
    await this.page.getByText("Login").click()
    await this.page.getByPlaceholder("Login ID").fill(username)
    await this.page.getByPlaceholder("Password").fill(password)
    await this.page.locator("input[value='Login']").click()
    await this.page.waitForLoadState()
}





}
module.exports= Login;