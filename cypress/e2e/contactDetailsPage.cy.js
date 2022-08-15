describe('contact details', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/contact-details')
    })

    it("should allow to type email", () => {
        cy.get('#contact-by-email')
          .type('john.doe@email.com')
          .should('have.value', 'john.doe@email.com')
    })

    it("should allow to type phone number", () => {
        cy.get('#contact-2').click()
        cy.get('#contact-by-phone')
          .type('7777777777')
          .should('have.value', '7777777777')
    })

    it("should allow to type phone number for text service", () => {
        cy.get('#contact-3').click()
        cy.get('#contact-by-text')
          .type('7777777777')
          .should('have.value', '7777777777')
    })

    it('lets you move to next page', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/check-answers')
    })
})