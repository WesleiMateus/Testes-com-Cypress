/// <reference types="cypress" />

describe("Validação de área de cadastro", () => {
  beforeEach(() => {
    cy.fixture("users").as("user");
  });

  context("Campo de Nome", () => {
    it("validar campo de nome vazio", () => {
      cy.visit("/register")
        .get("#email")
        .type("email@gmail.com")
        .get("#password")
        .type("password123");
      cy.get("#btnRegister").click();
      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo nome deve ser prenchido");
    });
  });

  context("Campo de E-mail", () => {
    it("validar campo de E-mail vazio", () => {
      cy.visit("/register")
        .get("#user")
        .type(this.user.valido.nome)
        .get("#password")
        .type("password123");
      cy.get("#btnRegister").click();
      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo e-mail deve ser prenchido corretamente");
    });

    it("Validar campo de E-mail, preenchido com E-mail inválido", () => {
      cy.visit("/register")
        .get("#user")
        .type(this.user.valido.nome)
        .get("#email")
        .type("Email#123@invalido.com")
        .get("#password")
        .type("password123");
      cy.get("#btnRegister").click();
      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo e-mail deve ser prenchido corretamente");
    });
  });

  context("Campo de Senha", () => {
    it("Validar campo de senha vazio", () => {
      cy.visit("/register")
        .get("#user")
        .type(this.user.valido.nome)
        .get("#email")
        .type("email@email.com");
      cy.get("#btnRegister").click();
      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo senha deve ter pelo menos 6 dígitos");
    });

    it("Validar campo de senha, preenchido com senha inválida", function () {
      cy.visit("/register")
        .get("#user")
        .type(this.user.valido.nome)
        .get("#email")
        .type("email@email.com")
        .get("#password")
        .type("123");
      cy.get("#btnRegister").click();
      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo senha deve ter pelo menos 6 dígitos");
    });
  });

  context("Cadastro com sucesso", () => {
    it("Cadastro realizado com sucesso!", function () {
      cy.visit("/register")
        .get("#user")
        .type(this.user.valido.nome)
        .get("#email")
        .type(this.user.valido.email)
        .get("#password")
        .type(this.user.valido.senha);

      cy.get("#btnRegister").click();

      cy.get("#swal2-title")
        .should("be.visible")
        .contains("Cadastro realizado");

      cy.get(".swal2-html-container").should(
        "have.text",
        `Bem-vindo ${this.user.valido.nome}`,
      );
    });
  });
});
