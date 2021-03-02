import "cypress-localstorage-commands";
import format from "date-fns/format";

const find = id => cy.get(id);

describe("Cookie", () => {
  before(() => cy.clearLocalStorageSnapshot());

  it("Container and banner is show, modal exist", () => {
    cy.visit("/");

    find("#js-cookie-banner-container").should("exist");
    find("#js-cookie-banner").should("be.visible");
    find("#js-cookie-modal").should("exist");
  });

  it("Accept all cookies", () => {
    cy.visit("/");

    find("#js-cookie-banner-container").should("exist");
    find("#js-cookie-banner").should("be.visible");
    find("#js-cookie-modal").should("exist");

    find(".js-cookie-button-allow").should("exist");
    find(".js-cookie-button-allow").click();

    const date = new Date();
    date.setSeconds(0, 0);

    cy.getLocalStorage("services").should(
      "equal",
      `{"createdAt":"${date.toISOString()}","googleAnalitycs":true,"googleTagManager":true,"hotjar":true,"myCustomService":true}`
    );

    find("#js-cookie-banner").should("be.not.visible");
  });

  it("Denie all cookies", () => {
    cy.visit("/");

    find("#js-cookie-banner-container").should("exist");
    find("#js-cookie-banner").should("be.visible");
    find("#js-cookie-modal").should("exist");

    find(".js-cookie-button-deny").should("exist");
    find(".js-cookie-button-deny").click();

    const date = new Date();
    date.setSeconds(0, 0);

    cy.getLocalStorage("services").should(
      "equal",
      `{"createdAt":"${date.toISOString()}","googleAnalitycs":false,"googleTagManager":false,"hotjar":false,"myCustomService":false}`
    );

    find("#js-cookie-banner").should("be.not.visible");
  });

  it("Custom cookies", () => {
    cy.visit("/");

    find("#js-cookie-banner-container").should("exist");
    find("#js-cookie-banner").should("be.visible");
    find("#js-cookie-modal").should("exist");

    find(".js-cookie-button-customize").should("exist");
    find(".js-cookie-button-customize").click();

    find("#js-cookie-modal").should("have.class", "is-open");
    find("#js-cookie-modal").should("have.attr", "aria-hidden", "false");
    find(".talp-modal-container").should("be.visible");

    // Check GTM and custom service added
    find('[name="googleTagManager"]').check();
    find('[name="myCustomService"]').check();

    find(".js-button-save-custom").should("be.visible");
    find(".js-button-save-custom").click();

    const date = new Date();
    date.setSeconds(0, 0);

    cy.getLocalStorage("services").should(
      "equal",
      `{"createdAt":"${date.toISOString()}","googleAnalitycs":false,"googleTagManager":true,"hotjar":false,"myCustomService":true}`
    );

    find("#js-cookie-modal").should("not.have.class", "is-open");
    find("#js-cookie-modal").should("have.attr", "aria-hidden", "true");
    find(".talp-modal-container").should("be.not.visible");
    find("#js-cookie-banner").should("be.not.visible");
  });

  it("Open and close modal", () => {
    cy.visit("/");

    find("#js-cookie-banner-container").should("exist");
    find("#js-cookie-banner").should("be.visible");
    find("#js-cookie-modal").should("exist");

    find(".js-cookie-button-customize").should("exist");
    find(".js-cookie-button-customize").click();

    find("#js-cookie-modal").should("have.class", "is-open");
    find("#js-cookie-modal").should("have.attr", "aria-hidden", "false");
    find(".talp-modal-container").should("be.visible");

    find(".js-modal-button-close").should("be.visible");
    find(".js-modal-button-close").click();

    find("#js-cookie-modal").should("not.have.class", "is-open");
    find("#js-cookie-modal").should("have.attr", "aria-hidden", "true");
    find(".talp-modal-container").should("be.not.visible");
    find("#js-cookie-banner").should("be.visible");
  });
});
