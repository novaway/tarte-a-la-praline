import "cypress-localstorage-commands";

const find = id => cy.get(id);

describe("Avoid undefined text", () => {
  before(() => cy.clearLocalStorageSnapshot());

  it("Change one text", () => {
    cy.visit("/");

    find(".talp-cookie-banner-text").invoke('text').then((text) => {
      expect(text.trim()).equal('En acceptant les cookies, vous améliorez votre expérience utilisateur')
    });

    find(".js-cookie-button-allow").invoke('text').then((text) => {
      expect(text.trim()).equal('Accepter')
    });

    find(".js-cookie-button-deny").invoke('text').then((text) => {
      expect(text.trim()).equal('Refuser')
    });

  });
});
