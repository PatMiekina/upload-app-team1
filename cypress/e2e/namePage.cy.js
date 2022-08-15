describe('what is your name', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/what-is-your-name')
    })

    it("should allow to type our name", () => {
        cy.get('#name-input')
          .type('John Doe')
          .should('have.value', 'John Doe')
    })

    it('lets you start the process', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/what-is-your-ni-number')
    })
})