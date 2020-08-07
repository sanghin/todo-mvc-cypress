describe('todo-mvc: todo edition', () => {
    it('should edit a todo', () => {
        cy.visit('/')
        const task = "Configure Cypress"
        cy.get('input[placeholder=Task]').type(`${task}{enter}`)
        cy.get('.todo-not-completed > td:nth-child(2) > button:nth-child(1)').click()

        cy.focus().should()
    })
})