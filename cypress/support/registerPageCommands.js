/// <reference types="cypress" />

// Elements

const elements = {
  form: ".account_form",
  formElements: {
    buttons: {
      register: "#btnRegister",
    },
    fields: {
      name: "#user",
      email: "#email",
      password: "#password",
    },
    messages: {
      error: ".errorLabel",
      successTitle: "#swal2-title",
      sucessSubTitle: ".swal2-html-container",
    },
  },
};

Cypress.Commands.add("registerUser", () => {
  cy.get(elements.formElements.buttons.register).click();
});

Cypress.Commands.add("fillName", (name) => {
  cy.get(elements.formElements.fields.name).type(name);
});

Cypress.Commands.add("fillEmail", (email) => {
  cy.get(elements.formElements.fields.email).type(email);
});

Cypress.Commands.add("fillPassword", (password) => {
  cy.get(elements.formElements.fields.password).type(password);
});

Cypress.Commands.add("checkMessage", (message) => {
  cy.get(elements.form).contains(message);
});

Cypress.Commands.add("checkRegisterSuccess", (userName) => {
  cy.get(elements.formElements.messages.successTitle)
    .should("be.visible")
    .contains("Cadastro realizado");

  cy.get(elements.formElements.messages.sucessSubTitle).should(
    "have.text",
    `Bem-vindo ${userName}`,
  );
});
