describe('Upload ID page', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/upload-photo-ID')
    })

    it('it moves to the next page- photo confirmation', () => {
        cy.get('#gov-button-upload-my-photo-id').click()
        cy.url().should('include', '/photo-confirmation')
    })
})