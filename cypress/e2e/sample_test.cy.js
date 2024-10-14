describe("My First Test", () => {
  it("Visits the app page and verifies the title", () => {
    cy.visit("/");
    cy.title().should("include", "Spin and Win!");
  });
});
