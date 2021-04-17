// https://docs.cypress.io/api/introduction/api.html

describe('Homepage', () => {
  it('Shows correct text', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello Vue 3 + Vite + Tailwind CSS')
  })

  describe('when user click on button', () => {
    it('should increment count', () => {
      const button = cy.findByRole('button', { name: /count/ }).click()
      button.should('contain.text', 'count is 0')
    })
  })
})
