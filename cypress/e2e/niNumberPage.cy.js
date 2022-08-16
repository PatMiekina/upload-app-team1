describe('what is your NI number', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/what-is-your-ni-number')
    })

    it("should allow to type our NI number", () => {
        cy.get('#national-insurance-number')
          .type('SZ12345678B')
          .should('have.value', 'SZ12345678B')
    })

    it('lets you move to next page', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/upload-photo-id')
    })
})