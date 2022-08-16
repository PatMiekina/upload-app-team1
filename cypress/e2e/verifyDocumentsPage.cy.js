describe('Verify Documents Page', () => {
    it('lands on the page', () => {
      cy.visit('http://localhost:3000/verify-documents')
    })
})

describe('Verify Documents Page options', () => {
  it('it moves to the next page- upload-a-video page', () => {
      cy.get('#verify-documents').click()
      cy.url().should('include', '/upload-a-video')
  })
})

describe('Verify Documents Page options', () => {
  it('it moves to the next page- arrange-virtual-meeting page', () => {
      cy.get('#verify-documents-2').click()
      cy.url().should('include', '/arrange-virtual-meeting')
  })
})

describe('Verify Documents Page options', () => {
  it('it moves to the next page- arrange-face-to-face page', () => {
      cy.get('#verify-documents-3').click()
      cy.url().should('include', '/arrange-face-to-face')
  })
})