describe('Note app', function() {
    const user = {
        "blogs": [],
        "username": "test",
        "name": "Jayshree",
        "password": "test123"
     }

      beforeEach(function() {
        /* cy.request('POST', 'http://localhost:3003/api/users',user) */ 
        cy.visit('http://localhost:3000')
      })


      it('Login form is shown and correct credentials work', function() {
      cy.visit('http://localhost:3000')
      cy.contains('login').click()
      cy.get('#username').type('fullstack')
      cy.get('#password').type('fullstack')
      cy.get("#login-button").click()
      cy.contains("fullstack logged in as fullstack")
    })


    it('Login form is shown and wrong credentials do not work', function() {
        cy.visit('http://localhost:3000')
        cy.contains('login').click()
        cy.get('#username').type('fullstack34')
        cy.get('#password').type('fullstack34')
        cy.get("#login-button").click()
        cy.contains("Wrong credentials!")
      })
    })
    describe('AFTER LOGGING IN', function() {
        beforeEach(function() {
            cy.visit('http://localhost:3000')
      cy.contains('login').click()
      cy.get('#username').type('fullstack')
      cy.get('#password').type('fullstack')
      cy.get("#login-button").click()
            })

      it('a new blog can be created', function() {
          
        cy.contains('create new blog').click()
        cy.get('#title').type('test123')
        cy.get('#author').type('test123')
        cy.get('#url').type('http://test123.com')
        cy.get('#newblog').click()
  
        cy.contains('test')
        cy.contains('view').click()
        cy.contains('like').click()
        cy.get('[data-testid="likes"]').contains('0')
        cy.get('#like').click()
        cy.get('[data-testid="likes"]').contains('1')
      })


      })

