describe('Note app', function() {

      it('Login form is shown', function() {
      cy.visit('http://localhost:3000')
      cy.contains('login').click()
      cy.get('#username').type('fullstack')
      cy.get('#password').type('fullstack')
      cy.get("#login-button").click()
      cy.contains("fullstack logged in as fullstack")
    })
  })