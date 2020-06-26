describe('hello', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should render Hello', () => {
    cy.get('#app > h1').contains('Hello world! 😎');
  });
});
