class LoginLocators{
    get EmailAdd(){
        return cy.get('#email')
    }

    get Password(){
        return cy.get('#password')
    }

    get LoginBtn(){
        return cy.get('.ws-v2-button-primary.mt-1r')
    }

    get couponBtn(){
        return cy.contains('Add Code ')
    }

    get couponInputCOde(){
        return  cy.get('.coupon-input-body').find('.default-input.coupon-input')
    }

    get savecoupon(){
        return cy.get('#save-button')
    }

    login= function(email,password){
        this.EmailAdd.type(email)
        this.Password.type(password)
        this.LoginBtn.click()

    }
    
}

module.exports= new LoginLocators;