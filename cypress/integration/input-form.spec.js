describe('Input form', () => {

    beforeEach(() => {
        cy.visit('/')
    })

    it('focuses on input on load', () => {
        cy.focused()
            .should('have.class', 'new-todo')
    })

    it('accepts inpuy', () => {
        const typedText = 'Buy Milk'
        cy.get('.new-todo')
            .type(typedText)
            .should('have.value', typedText)
    })
})