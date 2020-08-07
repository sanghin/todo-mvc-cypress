describe('todo-mvc: todo creation', () => {
    it('should create a todo', () => {
        cy.visit('/')
        const task = "Configure Cypress"
        cy.get('input[placeholder=Task]').type(`${task}{enter}`)
        cy.get('.todo-not-completed>td:first').contains(task)
    })
})