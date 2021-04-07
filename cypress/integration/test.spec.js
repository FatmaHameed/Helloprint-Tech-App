context('check the functionality of the project', () => {
  describe('verify the application is able to reach Spotify API', () => {
    const loginData = require('../fixtures/login_data.json');

    beforeEach(() => {
      cy.visit(loginData.url);
    });

    it('it should login correctly and access the Spotify API', () => {
      cy.login(loginData.username, loginData.password);
      cy.contains('Playing');
    });

    it('verify the application correctly showing a list of top tracks Spotify data on the UI', () => {
      cy.login('Karmast', 'Cimnec01');

      cy.intercept('GET', 'https://api.spotify.com/v1/me/player', {
        fixture: 'mock_data.json',
      }).as('mockData');

      cy.wait('@mockData').then(() => {
        cy.contains('Hold On');
      });
      // cy.contains('Hold On', { timeout: 6000 });
    });
  });
});
