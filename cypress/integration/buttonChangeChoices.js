import "cypress-localstorage-commands";

const find = id => cy.get(id);

describe("Open modal again and change choices", () => {
  before(() => cy.clearLocalStorageSnapshot());

  it("Button to change choices exist", () => {
    cy.visit("/");

    find(".open-new-modal").should("exist");

  });

  it("Click on button clear cache", () => {
    cy.visit("/");

    find('.open-new-modal').click().should(() => {
      expect(localStorage.getItem('services')).to.be.null;
    })

  });

  it("Click on button hide banner and open modal", () => {
    cy.visit("/");

    find('.open-new-modal').click();
    find('.talp-modal-container').should("be.visible");
    find('#js-cookie-banner').should("not.be.visible");
  });
});
