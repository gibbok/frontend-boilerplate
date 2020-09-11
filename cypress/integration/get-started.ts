import { mkRandomEmail, mkRandomString } from '../utils';

const URL_START = 'https://www.actyx.com/get-started/';
const URL_END_THANKS = 'https://www.actyx.com/thank-you';
const URL_END_DEVELOPER = 'https://developer.actyx.com/docs/home/welcome';

const TEST_EMAIL = mkRandomEmail();
const TEST_DETAILS = `test - ${mkRandomString()} - I am a robot adding details`;

const checkThankYou = () => {
  // assert submit was successful
  cy.contains('Thank you!').should('exist');
  cy.location().should((loc) => {
    expect(loc.href).to.eq(URL_END_THANKS);
  });
};

const submitForm = () => {
  const btnSumbit = cy.get('button[type="submit"]').should('exist');
  btnSumbit.click();
};

describe('get-started', () => {
  it('should schedule a call for a factory manager', () => {
    cy.visit(URL_START);

    // find button on page
    const btnScheduleCall = cy.contains('Schedule a call');
    btnScheduleCall.should('exist');

    // click button and open dialog
    btnScheduleCall.click();
    const inputEmail = cy.get('input[name="email"]').should('exist');

    // enter email
    inputEmail.click();
    inputEmail.type(TEST_EMAIL);

    // enter details
    const inputDetails = cy.get('textarea[name="additionalDetails"]').should('exist');
    inputDetails.type(TEST_DETAILS);

    submitForm();

    checkThankYou();
  });

  it('should schedule a demo for an it project manager', () => {
    cy.visit(URL_START);

    // find button on page
    const btnGetDemo = cy.contains('Get a demo');
    btnGetDemo.should('exist');

    // click button and open dialog
    btnGetDemo.click();
    const inputEmail = cy.get('input[name="email"]').should('exist');

    // enter email
    inputEmail.click();
    inputEmail.type(TEST_EMAIL);

    // enter details
    const inputDetails = cy.get('textarea[name="additionalDetails"]').should('exist');
    inputDetails.type(TEST_DETAILS);

    submitForm();

    checkThankYou();
  });

  it('should redirect a developer to developer site', () => {
    cy.visit(URL_START);

    // find button on page
    const btnGetStart = cy.get('button').contains('Get started');
    btnGetStart.should('exist');

    // click button and redirect user
    btnGetStart.click();
    cy.location().should((loc) => {
      expect(loc.href).to.eq(URL_END_DEVELOPER);
    });
  });
});
