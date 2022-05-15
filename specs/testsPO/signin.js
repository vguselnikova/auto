import RegistrationPage from "../../page_Objects/pages/registrationPage";
import LoginPage from "../../page_Objects/pages/loginPage";
import { loginData } from "../../fixtures/login"
import { registrationData } from "../../fixtures/registration"
import HomePage from "../../page_Objects/pages/home";

describe('Login with PO tests', ()=> {
    before('Register user and go back to login page', async () => {
        await LoginPage.open()        
        await LoginPage.register()       
        await RegistrationPage.register(registrationData.validData[0])       
        await RegistrationPage.back()           
    })
    for(const check of loginData.invalidData) {
        it(`Should not allow to sign in with "${check.username}" username and "${check.password}" password`, async () => {
            LoginPage.loginTest(check)
            await browser.pause(200)
        })
    }
    it('Should log in with valid credentials', async () => {
        await LoginPage.login(loginData.validData)
    })
    it('Should open login page by clicking back', async () => {
        await HomePage.back()
    })
}) 