import WebTablesPage from '../support/pages/WebTablesPage';
const Papa = require('papaparse');

describe('Web Tables Automation Test - DemoQA', () => {
  beforeEach(() => {
    WebTablesPage.visit();
  });

  it('4.1 Positive Test Case - Bulk Insert from CSV', () => {
    cy.fixture('users.csv').then((csvData) => {
      const parsedData = Papa.parse(csvData, { 
        header: true,
        skipEmptyLines: true 
      }).data;

      // Menggunakan for...of agar proses berjalan berurutan (sequential)
      async function processRows() {
        for (const user of parsedData) {
          if (user.email && user.email.trim() !== '') {
            WebTablesPage.clickAddButton();
            
            // Berikan jeda sejenak agar modal terbuka sempurna
            cy.wait(300);

            WebTablesPage.fillForm(
              user.firstName.trim(),
              user.lastName.trim(),
              user.email.trim(),
              user.age.trim(),
              user.salary.trim(),
              user.department.trim()
            );
            
            WebTablesPage.submitForm();
            WebTablesPage.verifyUserInTable(user.email.trim());
          }
        }
      }

      processRows();
    });
  });

  it('4.2 Negative Test Case - Field Email Dikosongkan', () => {
    WebTablesPage.clickAddButton();
    WebTablesPage.fillForm('Budi', 'Pratama', '', '28', '45000', 'IT');
    WebTablesPage.submitForm();
    
    cy.get('.modal-content').should('be.visible');
  });
});