describe('Check-answers', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/check-answers')
    })

    it('lets you move to next page- next-steps', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/next-steps')
    })
})