describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://www.way2automation.com/angularjs-protractor/webtables/')

    // Assert on page title
    cy.title().should('eq','Protractor practice website - WebTables')

    // Check that the page title is visible
  //  cy.title().should('be.visible')

    // Assert on table headings
    cy.get('.smart-table-header-row').should('contain','First Name').should('contain','Last Name').should('contain','User Name').should('contain','Customer').should('contain','Role').should('contain','E-mail').should('contain','Cell Phone').should('contain','Locked')
     

  })

  it('TC1 - Check each user is added when "Add User" button is clicked, all fields are populated AND "Save" button is clicked', () => {


    //Add user 1
    // Click on 'Add' button
    cy.get('.smart-table-global-search-row [ng-show="actions.add.url"] [type="add"] [ng-class="iconClass"]').click()
    cy.wait(2000)

    // Add user details on 'First Name' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="FirstName"]').type('FName1')

    // Add user details on 'Last Name' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="LastName"]').type('LName1')

    // Add user details on 'User Name' field
    var userNameNum = (userNameNum, Math.floor(Math.random() * 1000))
    var userName = "user" + userNameNum

    cy.get('.smart-table-edit-data-cell .ng-scope [name="UserName"]').type(userName)

    // Add user details on 'Password' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Password"]').type('Pass1')    

    // Add user details on 'Customer' field
    cy.get('.smart-table-edit-data-cell .ng-scope .radio [value="15"]').click()

    // Add user details on 'Role' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="RoleId"]').select('Admin')
    
    // Add user details on 'Email' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Email"]').type('admin@mail.com')

    // Add user details on 'Cell' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Mobilephone"]').type('082555')    

    // Click on 'Save' button
    cy.get('.modal-footer [class="btn btn-success"]').click()
    cy.wait(2000)



    //Add user 2
    // Click on 'Add' button
    cy.get('.smart-table-global-search-row [ng-show="actions.add.url"] [type="add"] [ng-class="iconClass"]').click()
    cy.wait(2000)

    // Add user details on 'First Name' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="FirstName"]').type('{selectAll}{backspace}')
    cy.get('.smart-table-edit-data-cell .ng-scope [name="FirstName"]').type('FName2')

    // Add user details on 'Last Name' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="LastName"]').type('{selectAll}{backspace}')
    cy.get('.smart-table-edit-data-cell .ng-scope [name="LastName"]').type('LName2')

    // Add user details on 'User Name' field
    var userNameNum2 = (userNameNum2, Math.floor(Math.random() * 1000))
    var userName2 = "user" + userNameNum2

    cy.get('.smart-table-edit-data-cell .ng-scope [name="UserName"]').type('{selectAll}{backspace}')
    cy.get('.smart-table-edit-data-cell .ng-scope [name="UserName"]').type(userName2)

    // Add user details on 'Password' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Password"]').type('{selectAll}{backspace}')    
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Password"]').type('Pass2') 

    // Add user details on 'Customer' field
    cy.get('.smart-table-edit-data-cell .ng-scope .radio [value="16"]').click()

    // Add user details on 'Role' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="RoleId"]').select('Customer')
    
    // Add user details on 'Email' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Email"]').type('{selectAll}{backspace}')
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Email"]').type('cusomter@mail.com')

    // Add user details on 'Cell' field
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Mobilephone"]').type('{selectAll}{backspace}')    
    cy.get('.smart-table-edit-data-cell .ng-scope [name="Mobilephone"]').type('083444') 

    // Click on 'Save' button
    cy.get('.modal-footer [class="btn btn-success"]').click()
    

  })

})