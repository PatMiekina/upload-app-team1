describe('verify documents', () => {
    // it('lands on the page', () => {
    //   cy.visit('http://localhost:3000/verify-documents')
    // })
    
    it('lets you move to next page- upload a video page', () => {
      cy.visit('http://localhost:3000/verify-documents')
      cy.get('[type="radio"]').check('Upload-a-video')
      cy.get('#govuk-button-continue').click()
      cy.url().should('include', '/upload-a-video')
    })

    // it('lets you move to next page- arrange-virtual-meeting', () => {
    //   cy.visit('http://localhost:3000/verify-documents')
    //   cy.get('#Arrange a virtual meeting').check()
    //   cy.get('#govuk-button-continue').click()
    //   cy.url().should('include', '/arrange-virtual-meeting')
    // })

    // it('lets you move to next page- arrange-face-to-face', () => {
    //   cy.visit('http://localhost:3000/verify-documents')
    //   cy.get('#Arrange a face to face meeting').check()
    //   cy.get('#govuk-button-continue').click()
    //   cy.url().should('include', '/arrange-face-to-face')
    // })
  })