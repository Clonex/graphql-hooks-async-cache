describe('persisted-queries', () => {
  it('The example adds two numbers', () => {
    const x = 4
    const y = 5

    cy.visit('http://localhost:3002')
    cy.findByLabelText('x').type(x.toString())
    cy.findByLabelText('y').type(y.toString())
    cy.findByRole('button', { name: /add/i }).click()
    cy.findByText(x + y).should('exist')
  })
})
