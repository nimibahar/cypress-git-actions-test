// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import "@testing-library/cypress/add-commands";

// EXAMPLE
// Cypress.Commands.add("login", (email = "nimrodbahar@gmail.com") => {
//   cy.window().then(() => {
//     cy.request({
//       url: "https://myfakesite.com",
//       method: "POST",
//       body: {
//         user: "Nim",
//         email,
//       },
//     }).then((res) => {
//       Cypress.log({
//         name: "Logged In",
//       });
//     });
//   });
// });
