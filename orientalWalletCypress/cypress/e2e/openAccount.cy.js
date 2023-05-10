import OpenAccountTest from "../pages/openAccountPages"
 

const openAcc = new OpenAccountTest()


describe("Go to Site", () => {
  beforeEach(() => {
    openAcc.visit()

   })

    
   
   it("should Open an Account", () => {

    openAcc.getOpenAccountButton().click()
    openAcc.getFirstNameField().type('Beidou')
    openAcc.getLastNameField().type('Captain')
    openAcc.getEmailAddressField().type('beidou@mailinator.com')
    openAcc.getPasswordField().type('Te$ting123')
    openAcc.getConfirmPasswordField().type('Te$ting123')
    openAcc.getMonthDropdown().click()
    openAcc.getMonthSelect().contains('January').click({force : true})
    openAcc.getDayDropdown().click()
    openAcc.getSelectDay().contains('1').click({force : true})
    openAcc.getYearDropdown().click()
    openAcc.getSelectYear().contains('2005').click({force : true})
    openAcc.getCountryDropdown().click()
    openAcc.getSelectCountry().contains('Australia').click({force : true})
    openAcc.getCaptchaCheckbox().click({ force : true})
  

    cy.wait(5000)

    // openAcc.getMonthSelect().contains('January').click({force : true})

      
   })


  })