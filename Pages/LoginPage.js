class LoginPage{


    constructor(page)
    {
        this.page = page
    }


    get btnLoginIn()
    {
        return this.page.locator("//button[.='Log In']")
    }

    get username()
    {
        return this.page.locator("(//input[@id='signInFormUsername'])[2]")
    }

    get password()
    {
        return this.page.locator("(//input[@id='signInFormPassword'])[2]")
    }
    
    get btnSignIn()
    {
        return this.page.locator("(//input[@name='signInSubmitButton'])[2]")
    }


    async login(userName,passWord)
    {
        await this.btnLoginIn.click()
        await this.username.fill(userName)
        await this.password.fill(passWord)
        await this.btnSignIn.click()
    }
}
module.exports ={LoginPage}