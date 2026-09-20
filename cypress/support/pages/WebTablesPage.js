class WebTablesPage {
  visit() {
    cy.visit('https://demoqa.com/webtables');
  }

  clickAddButton() {
    cy.get('#addNewRecordButton').click();
  }

  fillForm(firstName, lastName, email, age, salary, department) {
    if (firstName) cy.get('#firstName').clear().type(firstName);
    if (lastName) cy.get('#lastName').clear().type(lastName);
    if (email) cy.get('#userEmail').clear().type(email);
    if (age) cy.get('#age').clear().type(age);
    if (salary) cy.get('#salary').clear().type(salary);
    if (department) cy.get('#department').clear().type(department);
  }

  submitForm() {
    cy.get('#submit').click();
  }

  verifyUserInTable(email) {
    // 1. Pastikan modal form sudah tertutup
    cy.get('.modal-content', { timeout: 7000 }).should('not.exist');
    
    // 2. Langsung cek apakah email tersebut muncul di dalam tabel secara umum
    cy.contains(email, { timeout: 7000 }).should('be.visible');
  }
}

export default new WebTablesPage();