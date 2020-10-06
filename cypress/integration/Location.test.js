describe("Select location from input form: ", () => {
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
    cy.get("input[name=postcode]").clear().type("NW101LG");
    cy.get("input[type=submit]").click();
    cy.get("h1").should("contain", "What type of recycling do you have?");
    //Question: WHat's the difference between includes and contains
    cy.url().should("include", "/categories/brent");
  });

  it("Change location from categories page: ", () => {
    cy.go("back");
  });
});

describe("Select location using map:", () => {
  beforeEach(() => {
    cy.get("svg>g>path").eq(20).click();
  });
  it("Background colour of clicked borough turns orange", () => {
    cy.get("svg>g>path").eq(20).should("have.css", "fill", "rgb(230, 156, 65)");
  });
  it("Button appears after borough has been clicked", () => {
    // click on lambeth

    cy.get("main")
      .find("button")
      .get("h2")
      .should("contain", "Lambeth")
      .click();
    cy.get("h1").should("contain", "What type of recycling do you have?");
    cy.url().should("include", "/categories/lambeth");
  });
});
