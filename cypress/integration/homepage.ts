const URL_HOME = 'https://www.actyx.com/';

describe('www.actyx.com/', () => {
  it('should switch language after user clicks option', () => {
    cy.visit(URL_HOME);

    // check if english appears as default
    cy.contains('English').should('exist');
    cy.contains('The Factory Digitization Platform').should('exist');

    // change to german
    cy.get('a[href="/de/*"]').first().click({ force: true });
    cy.contains('Deutsch').should('exist');
    cy.contains('Die Plattform zur Digitalisierung der Fabrik').should('exist');
  });
});
