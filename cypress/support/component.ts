// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/vue'
import { createPinia, Pinia, setActivePinia } from 'pinia'
import { DefineComponent } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import '../../src/assets/main.css'

// Augment the Cypress namespace to include type definitions for
// your custom command.
// Alternatively, can be defined in cypress/support/component.d.ts
// with a <reference path="./component" /> at the top of your spec.
declare global {
  namespace Cypress {
    interface Chainable {
      mountWithPinia: typeof mountWithPinia
    }
  }
}

// Cypress.Commands.add('mount', mount)

let pinia: Pinia

beforeEach(() => {
  pinia = createPinia()

  setActivePinia(pinia)
})

function mountWithPinia(
  Comp: DefineComponent,
  options?: Parameters<typeof mount>[1]
): Cypress.Chainable {
  return mount(Comp, {
    ...options,
    global: {
      ...options?.global,
      plugins: [...(options?.global?.plugins ?? []), pinia],
      components: { 'font-awesome-icon': FontAwesomeIcon }
    }
  })
}

Cypress.Commands.add('mountWithPinia', mountWithPinia)

// Example use:
// cy.mount(MyComponent)
