class OpenAccountTest {
    constructor() {
      this.url = "https://portal-stage.orientalwallet.com/login"
      this.title = "OpenAccountTest" 
    }
   
    visit() {
      cy.visit(this.url)
    }
    getOpenAccountButton() {
      return cy.get('.btn-secondary')
    }

    getFirstNameField() {
      return cy.get('#first_name')
    }

    getLastNameField() {
      return cy.get('#last_name')
    }

    getEmailAddressField() {
      return cy.get('#email')
    }

    getPasswordField() {
      return cy.get('#password')
    }

    getConfirmPasswordField() {
      return cy.get('#password-confirm')
    }

    getMonthDropdown(){
      return cy.get('#select2-month-container')    
    }


    getMonthSelect(){
      return  cy.get('#select2-month-results')
    }
    

    getDayDropdown(){
      return cy.get('.col-3 > .select2-container > .selection > .select2-selection > .select2-selection__arrow')
    }

    getSelectDay(){
      return cy.get('#select2-day-results')
    }

    getYearDropdown(){
      return cy.get('.col-4 > .select2-container > .selection > .select2-selection > .select2-selection__arrow')
    }

    getSelectYear(){
      return cy.get('#select2-year-results')
    }

    getCountryDropdown(){
      return cy.get('.col-md-12 > .select2-container > .selection > .select2-selection > .select2-selection__arrow')
    }

    getSelectCountry(){
      return cy.get('#select2-country_of_residence-results')
    }

    getTermsConditionsCheckbox() {
      return cy.get('#terms_conditions_checkbox')
    }

    getReceiveUpdatesCheckbox() {
      return cy.get('#receive_updates_checkbox')
    }

    getCaptchaCheckbox() {
      return cy.get('[style="width: 304px; height: 78px;"] > div > iframe')
    }
    
}
module.exports = OpenAccountTest