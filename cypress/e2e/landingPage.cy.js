describe('start page', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/start')
    })

    it('lets you start the process', () => {
        cy.get('.govuk-button--start').click()
        cy.url().should('include', '/what-is-your-name')
    })
})