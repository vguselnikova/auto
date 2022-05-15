import Page from "./page";
import RegistrationPage from "./registrationPage"
import HomePage from "./home"
class LoginPage extends Page {
// components
  get username() {
    return $("#userName");
  }
  get password() {
    return $("#password");
  }
  get submitButton() {
    return $("#submit");
  }
  get errorMsg() {
      return $("#errorMessage")
  }
  get registerBtn() {
      return $('#registerOnLogin')
  }
  get title() {
      return $('#loginForm')
  }

async open() {
  super.open('/HiqoMeetup/')
  await expect(browser).toHaveTitle("Example for testing");
}

async login(data) {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.submitButton.click()
    await HomePage.successMsg.waitForDisplayed({timeout:3000})
    expect (await HomePage.successMsg.getText()).toEqual(`Hello, ${data.username}!`)
  }

  async loginTest(data) {
    await this.username.setValue(data.username);
    await this.password.setValue(data.password);
    await this.submitButton.click()
    await this.errorMsg.waitForDisplayed({timeout:3000})
    expect (await this.errorMsg.getText()).toEqual(date.message)
  }
  
async register() {
      await this.registerBtn.click()
      await RegistrationPage.title.waitForDisplayed({timeout:3000})
      expect(await RegistrationPage.title.getText()).toEqual('Registration')

  }}

export default new LoginPage() 

