class ResizablePage {
  visit() {
    cy.visit('https://demoqa.com/resizable');
  }

  resizeElement() {
    // Melakukan resize box pertama (#resizableBoxWithRestriction)
    cy.get('#resizableBoxWithRestriction')
      .find('.react-resizable-handle')
      .trigger('mousedown', { which: 1, force: true })
      .trigger('mousemove', { clientX: 400, clientY: 300, force: true })
      .trigger('mouseup', { force: true });
  }

  verifySize() {
    // Memastikan elemen berhasil di-resize (menyesuaikan dengan batas max/tarikan aktual di halaman)
    cy.get('#resizableBoxWithRestriction')
      .invoke('attr', 'style')
      .should('include', 'width:')
      .and('include', 'height:');
  }
}

export default new ResizablePage();