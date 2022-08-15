describe('face to face time', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/face-to-face-time')
    })

    it("should allow to click on all the radios", () => {
        cy.get('#select-time').click()
        cy.get('#select-time-2').click()
        cy.get('#select-time-3').click()
        cy.get('#select-time-4').click()
        cy.get('#select-time-5').click()
    })

    it('lets you move to next page', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/contact-details')
    })
})