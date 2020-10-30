import { mkRandomEmail } from '../utils';

describe('www.actyx.com/', () => {
  const URL_HOME_EN = 'https://www.actyx.com/';
  const URL_HOME_DE = 'https://www.actyx.com/de/';
  const MSG_PRIVACY_EN =
    'This website stores cookies on your computer to provide more personalized services to you.';
  const MSG_PRIVACY_DE = 'Diese Website speichert Cookies auf Ihrem Computer.';

  beforeEach(() => {
    cy.visit(URL_HOME_EN);
  });

  it('should switch language after user clicks option', () => {
    cy.contains('English').should('exist');
    cy.contains('The Factory Digitization Platform').should('exist');

    cy.get('a[href="/de/*"]').first().click({ force: true });
    cy.contains('Deutsch').should('exist');
    cy.contains('Die Plattform zur Digitalisierung der Fabrik').should('exist');
  });

  it('should sign-up to newsletter', () => {
    const email = mkRandomEmail();
    cy.contains('Sign-up to our newsletter').should('exist');

    const input = cy.get('input[type="email"]');
    input.should('exist');
    input.type(email);

    const submit = cy.get('button[type="submit"]');
    submit.should('exist');
  });

  it('should display imprint with valid link en', () => {
    cy.visit(URL_HOME_EN);
    cy.contains('Imprint')
      .should('exist')
      .should('have.attr', 'href', '/imprint');
  });

  it('should display imprint with valid link de', () => {
    cy.visit(URL_HOME_DE);
    cy.contains('Impressum')
      .should('exist')
      .should('have.attr', 'href', '/de/imprint');
  });

  describe('cookies warning', () => {
    it('should show cookies warning in en', () => {
      cy.visit(URL_HOME_EN);
      cy.contains(MSG_PRIVACY_EN).should('exist');
    });

    it('should show cookies warning in de', () => {
      cy.visit(URL_HOME_DE);
      cy.contains(MSG_PRIVACY_DE).should('exist');
    });

    it('should close warning when user accepts cookies', () => {
      cy.visit(URL_HOME_EN);
      const buttonAccept = cy.get('#hs-eu-confirmation-button').should('exist');
      buttonAccept.click();
      cy.contains(MSG_PRIVACY_EN).should('be.hidden');
    });
  });
});
