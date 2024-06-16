import SearchInput from '../../src/components/SearchInput.vue'

describe('<SearchInput />', () => {
  it('Clear input as value is typed and enter is pressed', () => {
    cy.mountWithPinia(SearchInput)
    cy.get('input').should('have.attr', 'placeholder', 'Add channel')

    cy.get('input').type('test')
    cy.get('input').should('have.value', 'test')

    cy.get('input').type('{enter}')
    cy.get('input').should('not.have.value', 'test')
    cy.get('input').should('have.value', '')
  })
})
