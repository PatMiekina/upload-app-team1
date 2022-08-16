describe('photo confirmation', () => {
  it('lands on the page', () => {
    cy.visit('http://localhost:3000/photo-confirmation')
  })

  it('lets you move to next page', () => {
      cy.get('#govuk-button-yes-i-want-to-continue').click()
      cy.url().should('include', '/verify-documents')
  })
})