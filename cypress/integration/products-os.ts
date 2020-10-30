describe('www.actyx.com/products/os/', () => {
  const URL_START = 'https://www.actyx.com/products/os/';
  const URL_DOCS_OS =
    'https://developer.actyx.com/docs/os/getting-started/installation/';

  beforeEach(() => cy.visit(URL_START));

  it('should open docs website when user click cta', () => {
    const btnDocs = cy.contains('READ THE DOCS');
    btnDocs.should('exist');
    btnDocs.click();
    cy.url().should('eq', URL_DOCS_OS);
  });

  it('should have a button to open the video', () => {
    const btnVideo = cy.contains('Actyx in 10 Minutes');
    btnVideo.should('exist');
  });
});
