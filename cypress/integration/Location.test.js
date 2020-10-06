describe("Location page tests: ", () => {
  it("Location page succesfully loaded", () => {
    cy.visit("/");
  });

  it("Wrong postcode input test:", () => {
    // selecting input
    cy.get("input[name=postcode]").type("NWW111FG");
    // selecting submit button
    cy.get("input[type=submit]").click();
    // expected error message
    cy.get("form").should("contain", "Borough Not Found! Please try again!");
  });

  it("Correct postcode input test:", () => {
    cy.get("input[name=postcode]").type("NW101LG");
    cy.get("input[type=submit]").click();
    cy.get("h1").should("contain", "What type of recycling do you have?");
  });
});
