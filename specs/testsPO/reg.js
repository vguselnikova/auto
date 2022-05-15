import  RegistrationPage  from "../../page_Objects/pages/registrationPage"
import { registrationData } from "../../fixtures/registration"
import LoginPage from "../../page_Objects/pages/loginPage"

describe('Registration with PO tests', function(){
    before('Open project, go to Registration page', async ()=> {
        await LoginPage.open();
        await LoginPage.register()
    })

    for (const check of registrationData.validData)
    it(`Should  allow to create user with "${check.username}" username and "${check.password}" password`, async function () {
        await RegistrationPage.register(check)
        await browser.pause(200)
    })

    for (const check of registrationData.invalidData)
    it(`Should not allow to create user with "${check.username}" username and "${check.password}" password`, async function () {
        await RegistrationPage.register(check)
        await browser.pause(200)
    }) 
    it('back', async () => {
        await RegistrationPage.back() 
    })
})