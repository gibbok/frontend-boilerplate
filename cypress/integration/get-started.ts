import { mkRandomEmail, mkRandomString } from '../utils';

describe('actyx.com/get-started/', () => {
  const URL_GETSTARTED = 'https://www.actyx.com/get-started/';
  const URL_DEVELOPER = 'https://developer.actyx.com/docs/home/home';

  const TEST_EMAIL = mkRandomEmail();
  const TEST_DETAILS = `test - ${mkRandomString()} - I am a robot adding details`;

  it('should schedule a call for a factory manager', () => {
    cy.visit(URL_GETSTARTED);

    const btnScheduleCall = cy.contains('Schedule a call');
    btnScheduleCall.should('exist');

    btnScheduleCall.click();
    const inputEmail = cy.get('input[name="email"]').should('exist');

    inputEmail.click();
    inputEmail.type(TEST_EMAIL);

    const inputDetails = cy
      .get('textarea[name="additionalDetails"]')
      .should('exist');
    inputDetails.type(TEST_DETAILS);
  });

  it('should schedule a demo for an it project manager', () => {
    cy.visit(URL_GETSTARTED);

    const btnGetDemo = cy.contains('Get a demo');
    btnGetDemo.should('exist');

    btnGetDemo.click();
    const inputEmail = cy.get('input[name="email"]').should('exist');

    inputEmail.click();
    inputEmail.type(TEST_EMAIL);

    const inputDetails = cy
      .get('textarea[name="additionalDetails"]')
      .should('exist');
    inputDetails.type(TEST_DETAILS);
  });

  it.only('should redirect a developer to developer site', () => {
    cy.visit(URL_GETSTARTED);

    const btnGetStart = cy.get('button').contains('Get started');
    btnGetStart.should('exist');

    btnGetStart.click();
    cy.url().should('equal', URL_DEVELOPER);
  });
});
