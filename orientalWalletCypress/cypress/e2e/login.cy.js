import loginTest from "../pages/loginPages"
 

const login = new loginTest()


describe("Go to Site", () => {
  beforeEach(() => {
    login.visit()

   })
   it("should Login", () => {

    login.getEmailField().type('josebrian@mailinator.com')
    login.getPasswordField().type('Te$ting123')
    login.getLoginButton().click()
    login.getWelcomeMessage().should('have.value', 'Welcome to Oriental Wallet')

    

    })
})