describe("Login page", () => {
  it("Login success", () => {
    cy.visit("/");
    cy.get('[name="phoneNumber"]').focus();
    cy.get('[name="phoneNumber"]').type("0915818091");
    cy.get('[name="password"]').focus();
    cy.get('[name="password"]').type("abc123");
    cy.get('button[type="button"]').click();
    cy.contains("Login Success !").should("be.visible");
  });
});
