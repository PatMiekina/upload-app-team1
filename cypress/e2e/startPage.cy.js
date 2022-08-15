// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })

describe('start page', () => {
  it('lands on the page', () => {
    cy.visit('http://localhost:3000')
  })
})