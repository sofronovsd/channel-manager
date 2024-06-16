import ChannelManager from '../../src/components/ChannelManager.vue'

describe('<ChannelManager />', () => {
  it('Adds and removes channels', () => {
    cy.mountWithPinia(ChannelManager)

    cy.get('[data-testid="channel-item"]').should('have.length', 2)

    cy.get('input').type('test{enter}')

    cy.get('[data-testid="channel-item"]').should('have.length', 3)

    cy.get('[data-testid="channel-item"]').contains('Remove').click()

    cy.get('[data-testid="channel-item"]').should('have.length', 2)
  })
})
