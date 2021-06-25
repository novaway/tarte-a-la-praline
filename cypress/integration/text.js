import "cypress-localstorage-commands";

const find = id => cy.get(id);

describe("Cookie", () => {
  before(() => cy.clearLocalStorageSnapshot());

  it("Open and close modal", () => {
    cy.visit("/");

    find(".talp-cookie-banner-text").invoke('text').then((text) => {
      expect(text.trim()).equal('TODO')
    });

    find(".js-cookie-button-allow").invoke('text').then((text) => {
      expect(text.trim()).equal('Accepter')
    });

    find(".js-cookie-button-deny").invoke('text').then((text) => {
      expect(text.trim()).equal('Refuser')
    });

  });
});
