class DroppablePage {
  visit() {
    // Pastikan kita mengunjungi halaman droppable dengan kondisi bersih
    cy.visit('https://demoqa.com/droppable');
  }

  dragAndDrop() {
    // Menggunakan simulasi native mouse events
    // 1. Klik dan tahan (mousedown) di tengah kotak sumber
    cy.get('#draggable').trigger('mousedown', { which: 1, force: true });
    
    // 2. Geser kursor mouse (mousemove) secara perlahan menimpa tengah kotak tujuan
    // Menambahkan jeda singkat (short delay) antar event
    cy.get('#droppable')
      .trigger('mousemove', { clientX: 100, clientY: 100, force: true })
      .wait(50); // Jeda 50ms
    
    // 3. Lepaskan klik mouse (mouseup) di atas kotak tujuan
    cy.get('#droppable').trigger('mouseup', { force: true });
  }

  verifyDropped() {
    // Verifikasi bahwa kotak tujuan sekarang berisi teks "Drop Here!"
    cy.get('#droppable').should('contain.text', 'Drop Here');
  }
}

export default new DroppablePage();