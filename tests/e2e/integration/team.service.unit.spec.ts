import { getList } from '../../../src/services/team.service'

describe('team.service', () => {
  before(() => {
    cy.intercept('http://localhost:5000/list', (req) => {
      req.reply({ bar: 'foo' })
    })
  })
  describe('getTeam', () => {
    it('should call rest api', () => {
      // given

      // when
      cy.wrap(getList()).should('deep.equal', { bar: 'foo' })

      // then
    })
  })
})
