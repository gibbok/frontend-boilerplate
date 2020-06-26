describe('hello', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006/iframe.html?id=app--base');
  });

  it('should render Hello', () => {
    cy.get('#root > h1').contains('Hello world! 😎');
  });
});
