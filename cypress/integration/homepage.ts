import { mkRandomEmail } from '../utils';

const URL_HOME = 'https://www.actyx.com/';
const MSG_PRIVACY_EN =
  'This website stores cookies on your computer to provide more personalized services to you.';

const MSG_PRIVACY_DE = 'Diese Website speichert Cookies auf Ihrem Computer.';

describe('www.actyx.com/', () => {
  beforeEach(() => {
    cy.visit(URL_HOME);
  });

  it('should switch language after user clicks option', () => {
    // check if en appears as default
    cy.contains('English').should('exist');
    cy.contains('The Factory Digitization Platform').should('exist');

    // change to de
    cy.get('a[href="/de/*"]').first().click({ force: true });
    cy.contains('Deutsch').should('exist');
    cy.contains('Die Plattform zur Digitalisierung der Fabrik').should('exist');
  });

  it('should sign-up to newsletter', () => {
    // check if text is on page
    const email = mkRandomEmail();
    cy.contains('Sign-up to our newsletter').should('exist');

    // get input and enter an email
    const input = cy.get('input[type="email"]');
    input.should('exist');
    input.type(email);

    // click submit button and assert subscription
    const submit = cy.get('button[type="submit"]');
    submit.should('exist');
    submit.click();
    cy.contains('Thank you! Your request was successfully submitted.');
  });

  describe.only('cookies warning', () => {
    it('should show cookies warning in en', () => {
      cy.visit(`${URL_HOME}`);
      cy.contains(MSG_PRIVACY_EN).should('exist');
    });

    it('should show cookies warning in de', () => {
      cy.visit(`${URL_HOME}/de/`);
      cy.contains(MSG_PRIVACY_DE).should('exist');
    });

    it('should close warning when user accepts cookies', () => {
      cy.visit(`${URL_HOME}`);
      const buttonAccept = cy.get('#hs-eu-confirmation-button').should('exist');
      buttonAccept.click();
      cy.contains(MSG_PRIVACY_EN).should('be.hidden');
    });
  });
});
