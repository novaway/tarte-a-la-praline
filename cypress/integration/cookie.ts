import "cypress-localstorage-commands";

describe("Cookie", () => {
  before(() => {
    cy.clearLocalStorageSnapshot();
  });

  it("Banner is show", () => {
    cy.visit("127.0.0.1:3000");
    cy.window().invoke("init");
    cy.get("#js-cookie-banner").should(($banner) => {
      expect($banner).to.have.length(1);
    });
    cy.get("#js-cookie-modal").should(($modal) => {
      expect($modal).to.have.length(1);
    });
  });

  it("set all cookies", () => {
    cy.visit("127.0.0.1:3000");
    cy.window().invoke("init");
    const acceptAll = cy.get(".js-cookie-button-allow");
    acceptAll.click({ force: true });
    cy.get("#banner-cookie").should("not.be.visible");
  });

  it("deny all cookies", () => {
    cy.visit("127.0.0.1:3000");
    cy.window().invoke("init");
    const denyAll = cy.get(".js-cookie-button-deny");
    denyAll.click({ force: true });
    cy.get("#banner-cookie").should("not.be.visible");
  });

  it("set custom cookies", () => {
    cy.visit("127.0.0.1:3000");
    cy.window().invoke("init");
    const custom = cy.get(".js-cookie-button-customize");
    custom.click({ force: true });
    cy.get("#banner-cookie").should("be.visible");
    cy.get("#js-cookie-modal").should("have.class", "is-open");
    const validate = cy.get(".js-button-save-custom");
    validate.click({ force: true });
    cy.get("#banner-cookie").should("not.be.visible");
    cy.get("#js-cookie-modal").should("not.have.class", "is-open");
  });
});
