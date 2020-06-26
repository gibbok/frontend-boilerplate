describe('hello', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080');
  });

  it('should render Hello', () => {
    cy.get('#app > h1').contains('Hello world! 😎');
  });
});
