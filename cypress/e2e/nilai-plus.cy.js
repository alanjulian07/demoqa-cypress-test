import DroppablePage from '../support/pages/DroppablePage';
import ResizablePage from '../support/pages/ResizablePage';

describe('Nilai Plus (Opsional) Test Cases - DemoQA', () => {
  
  it('Nilai Plus 1: Droppable Test - Melakukan aksi Drag and Drop', () => {
    DroppablePage.visit();
    DroppablePage.dragAndDrop();
    DroppablePage.verifyDropped();
  });

  it('Nilai Plus 2: Resizable Test - Melakukan resize element (400 x 200)', () => {
    ResizablePage.visit();
    ResizablePage.resizeElement();
    ResizablePage.verifySize();
  });

});