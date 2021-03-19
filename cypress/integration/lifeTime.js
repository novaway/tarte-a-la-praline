import "cypress-localstorage-commands";

const find = id => cy.get(id);

describe("Storage life time", () => {
  before(() => cy.clearLocalStorageSnapshot());

  it("createdAt key exist", () => {
    cy.visit("/");

    find(".js-cookie-button-allow").should("exist");
    find(".js-cookie-button-allow").click();

    const date = new Date();
    date.setSeconds(0, 0);

    cy.getLocalStorage("services").then(services => {
      const parsedServices = JSON.parse(services);
      expect(parsedServices.createdAt).to.equal(date.toISOString());
      find("#js-cookie-banner").should("be.not.visible");
    });
  });

  it("banner is hide if current date is < to 13 months", () => {
    cy.visit("/", {
      onBeforeLoad: window => {
        const date = new Date();
        date.setSeconds(0, 0);
        date.setMonth(date.getMonth() - 3);

        window.localStorage.setItem(
          "services",
          `{"createdAt":"${date.toISOString()}","googleAnalitycs":false,"googleTagManager":true,"hotjar":false,"myCustomService":true}`
        );
      }
    });

    find(".js-cookie-button-allow").should("be.not.exist");
  });

  it("banner is show if current date is > to 13 months", () => {
    cy.visit("/", {
      onBeforeLoad: window => {
        const date = new Date();
        date.setSeconds(0, 0);
        date.setMonth(date.getMonth() - 14);

        window.localStorage.setItem(
          "services",
          `{"createdAt":"${date.toISOString()}","googleAnalitycs":false,"googleTagManager":true,"hotjar":false,"myCustomService":true}`
        );
      }
    });

    find(".js-cookie-button-allow").should("be.exist");
    find(".js-cookie-button-allow").should("be.visible");
  });
});
