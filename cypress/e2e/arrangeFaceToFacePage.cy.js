describe('arrange face to face', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/arrange-face-to-face')
    })

    it("should allow to click on all the radios", () => {
        cy.get('#select-date').click()
        cy.get('#select-date-2').click()
        cy.get('#select-date-3').click()
        cy.get('#select-date-4').click()
        cy.get('#select-date-5').click()
    })

    // it("should show the meeting location on the map", () => {
    //     cy.get('#map-google').click()
    //     cy.url().should('include', 'maps')
    // })

    it('lets you move to next page', () => {
        cy.get('#govuk-button-continue').click()
        cy.url().should('include', '/face-to-face-time')
    })
})