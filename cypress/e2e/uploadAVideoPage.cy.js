describe('Upload a video page', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/upload-a-video')
    })

    it('it moves to the next page- contact-details', () => {
        cy.get('#gov-button-continue').click()
        cy.url().should('include', '/contact-details')
    })
})