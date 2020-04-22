describe("Cookie", () => {
  it("Banner is show", () => {
    cy.visit("127.0.0.1:3000");
    cy.window().invoke("init");

    localStorage.getItem("services");
  });
});
