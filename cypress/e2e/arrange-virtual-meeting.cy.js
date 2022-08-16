describe('arrange virtual meeting', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/arrange-virtual-meeting')
    })

    it("should allow to click on all the radios", () => {
        cy.get('#select-date').click()
        cy.get('#select-date-2').click()
        cy.get('#select-date-3').click()
        cy.get('#select-date-4').click()
        cy.get('#select-date-5').click()
    })

    it('lets you move to next page', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/virtual-meeting-time')
    })
})