describe('check the functionality of the project', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });
  it("verify it's able to reach Spotify API", () => {
    cy.get('.btn').click();
    cy.url(
      'https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-top-read%2Buser-read-currently-playing%2Buser-read-playback-state%26response_type%3Dtoken%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fredirect%26client_id%3Df23a1df5660249598060b7170f22c3f3%26show_dialog%3Dtrue',
    );
    cy.get('[ng-model="form.username"]').clear().type('Karmast');
    cy.get('[ng-model="form.password"]').clear().type('Cimnec01');
    cy.get('#login-button').click();
    cy.get('#auth-accept').click();
  });
  it("verify it's correctly showing a list of top tracks on the UI", () => {
    cy.get('.btn').click();
    cy.url(
      'https://accounts.spotify.com/en/login?continue=https:%2F%2Faccounts.spotify.com%2Fauthorize%3Fscope%3Duser-top-read%2Buser-read-currently-playing%2Buser-read-playback-state%26response_type%3Dtoken%26redirect_uri%3Dhttp%253A%252F%252Flocalhost%253A3000%252Fredirect%26client_id%3Df23a1df5660249598060b7170f22c3f3%26show_dialog%3Dtrue',
    );
    cy.get('[ng-model="form.username"]').clear().type('Karmast');
    cy.get('[ng-model="form.password"]').clear().type('Cimnec01');
    cy.get('#login-button').click();
    cy.get('#auth-accept').click();
    cy.url('http://localhost:3000/redirect#');
  });
});
