///<reference types= "cypress"/>
const Locators = require("../page_Object/Locators");

let user = {
  Fname: "abc",
  Lname: "def",
  email: `dsample${Math.random(Math.round()) * 2}@gmail.com`,
  Pass: `Password@123`,
  phone: 9222222222,
  addLine1: "Street Address sample 1",
  addLine2: "Street Address sample 2",
  city: "sample",
  state: "Alaska",
  zip: 41050,
  country: "USA",
  size: 4,
};
let CrediCard = {
  cardNO: "4242424242424242",
  cvv: "111",
  expDate: "0125",
};

describe("abc", function () {
  it("Create Account and Purchase Using only Credit Card", function () {
    Locators.urlpage("register")
    Locators.First_name.type(user.Fname);
    Locators.Last_name.type(user.Lname);
    Locators.Email.type(user.email);
    Locators.Password.type(user.Pass);
    Locators.CreateBtn.click();
    Locators.PhoneNo.type(user.phone);
    cy.wait(1500);
    Locators.confirmBtn.click();
    cy.wait(12000);
    cy.get(".title-container").scrollIntoView();
    // cy.scrollIntoView()
    Locators.AddToCart.click();
    //size of dress
    cy.get(".vs__search").click();
    cy.get(`#vs1__option-${user.size}`).click();
    Locators.saveBtn.click();
    cy.wait(2000);
    Locators.DeliveryBtn.click();
    Locators.DelAddLine1.type(user.addLine1);
    Locators.DelAddLine2.type(user.addLine2);
    Locators.DelAddCity.type(user.city);
    Locators.DelState.select(user.state);
    Locators.DelAddZip.type(user.zip);
    Locators.DelCountry.select(user.country);
    Locators.DelAddSaveBtn.click();
    cy.wait(3000);
    Locators.CreditButton.click();
    cy.wait(1500);
    //iframe
    cy.get('[title="Secure card payment input frame"]').then(function (iframe) {
      let body = iframe[0].contentDocument.body;
      cy.wrap(body).as("bdy");
      cy.get("@bdy").find('[name="cardnumber"]').type(CrediCard.cardNO);
      cy.get("@bdy").find('[name="exp-date"]').type(CrediCard.expDate);
      cy.get("@bdy").find('[name="cvc"]').type(CrediCard.cvv);
      cy.get("@bdy").find('[name="postal"]').type(user.zip);
      Locators.AddCredCardBtn.click();
    });
    Locators.payWithCard.click();
    cy.get(".modal-body > div > h1").should(
      "have.text",
      "Thank you for your order!"
    );
  });

  it.only("second scenario",function(){
    Locators.urlpage("login")


  })
});
