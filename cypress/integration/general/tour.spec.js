// https://docs.cypress.io/guides/references/assertions#Common-Assertions
// https://docs.cypress.io/api/commands/should#Syntax
// https://www.chaijs.com/api/bdd/

describe("Make sure the site loads", () => {
  beforeEach(() => {
    const configUrl =
      "https://api.themoviedb.org/3/configuration?api_key=742c70220fbfc14f66f3f179ab680b32";

    cy.intercept(configUrl, { fixture: "config" });

    const moviesListUrl =
      "https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&api_key=742c70220fbfc14f66f3f179ab680b32";

    cy.intercept(moviesListUrl, { fixture: "moviesList" });
    cy.visit("http://localhost:3000/");
    // cy.login();
  });

  it("Page loads", () => {
    cy.contains("Filter");

    cy.findAllByTestId("movies-list-movie")
      .first()
      .then(($movie) => {
        const movieUrl = $movie.attr("href");
        cy.get("[data-testid=movies-list-movie]").first().click();
        cy.url().should("include", movieUrl);
      });
    expect(true).to.equal(true);
  });
  it("Should display correct number of movies", () => {
    cy.get("[data-testid=movies-list-movie]").should("have.length", 20);

    expect(true).to.equal(true);

    cy.fixture("moviesList").then((jsonData) => {
      console.log("jsonData", jsonData.results[0].title);
      expect(jsonData.results[0].title).to.eq("Black Widow");
    });
  });
});
