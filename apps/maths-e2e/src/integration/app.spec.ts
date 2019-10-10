import { getGreeting } from '../support/app.po';

describe('maths', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to maths!');
  });
});
