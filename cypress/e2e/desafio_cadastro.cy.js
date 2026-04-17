/// <reference types="cypress" />

describe("Validação de área de cadastro", () => {
  beforeEach(() => {
    cy.fixture("users").as("user");
  });

  const userData = require("../fixtures/users.json");

  context("Campo de Nome", () => {
    it("validar campo de nome vazio", () => {
      cy.visit("/register");

      cy.get("#email").type(userData.valido.email);

      cy.get("#password").type(userData.valido.senha);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo nome deve ser prenchido");
    });
  });

  context("Campo de E-mail", () => {
    it("validar campo de E-mail vazio", () => {
      cy.visit("/register");

      cy.get("#user").type(userData.valido.nome);

      cy.get("#password").type(userData.valido.senha);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo e-mail deve ser prenchido corretamente"); // erro de português proposital em "prenchido" pq no site de testes está assim
    });

    it("Validar campo de E-mail, preenchido com E-mail inválido", () => {
      // Preenchendo os dados do usuário usando apenas o import normal de dados

      cy.visit("/register").get("#user").type(userData.valido.nome);

      cy.get("#email").type(userData.invalido.email); // Testando apenas o campo de email com dado inválido

      cy.get("#password").type(userData.valido.senha);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo e-mail deve ser prenchido corretamente");
    });
  });

  context("Campo de Senha", () => {
    it.only("Validar campo de senha vazio", function () {
      cy.visit("/register");

      cy.get("#user").type(this.user.valido.nome);

      cy.get("#email").type(this.user.valido.email);

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
        .type(this.user.valido.email)

        .get("#password")
        .type(this.user.invalido.senha);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo senha deve ter pelo menos 6 dígitos");
    });
  });

  context("Cadastro com sucesso", () => {
    it("Cadastro realizado com sucesso!", function () {
      // Preenchendo os dados do usuário usando fixtures

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
