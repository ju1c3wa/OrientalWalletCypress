class LoginTest {
    constructor() {
      this.url = "https://portal-stage.orientalwallet.com/login"
      this.title = "LoginTest" 
    }
   
    visit() {
      cy.visit(this.url)
    }
    getEmailField() {
      return cy.get('#email')
    }

    getPasswordField() {
      return cy.get('#password')
    }
    getLoginButton() {
        return cy.get('.btn-primary')
    }

    getProfileDropdown() {
        return cy.get('#navbarDropdownUserImage')
    }

    getWelcomeMessage() {
        return cy.get(':nth-child(2) > .card-header')
    }

  
    
}
module.exports = LoginTest