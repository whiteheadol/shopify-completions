/// <reference types="cypress" />

describe('ai travel planner', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('POST', "https://api.openai.com/v1/engines/text-curie-001/completions", {
      fixture: 'aiResponse'
    });
  });

  it('Should display a homepage upon page load', () => {

    cy.contains('let ai help you plan your next adventure')
    cy.contains('your past inspiration:')
    cy.get('form').contains('describe your dream trip in a few words:')
    cy.get('form').contains('let\'s go')

  })

  it('Should be able to submit form input and receive an ai response', () => {

    const newPrompt = 'shopping, museums, cold'

    cy.get('input[name="prompt"]')
      .type(`${newPrompt}`)
      .should('have.value', `${newPrompt}`)

    cy.get('.submit-button').click()

    cy.get('.idea').contains(`prompt: ${newPrompt}`)
    cy.get('.idea').contains(`response: You should visit Iceland!`)

  })

  it('Should not accept a form submission if the input is empty', () => {

    cy.get('.submit-button').click()

    cy.get('form').contains('please provide a valid input')
    
  })

  })
