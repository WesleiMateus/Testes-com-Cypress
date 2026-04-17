/// <reference types="cypress" />

import { faker } from "@faker-js/faker";

describe("Validação de área de cadastro", () => {
  beforeEach(() => {
    cy.fixture("users").as("user");

    cy.visit("/register");
  });

  const userData = require("../fixtures/users.json");

  context("Campo de Nome", () => {
    it("validar campo de nome vazio", () => {
      cy.fillEmail(userData.valido.email);

      cy.fillPassword(userData.valido.senha);

      cy.registerUser();

      cy.checkMessage("O campo nome deve ser prenchido");
    });
  });

  context("Campo de E-mail", () => {
    it("validar campo de E-mail vazio", () => {
      // Usando comandos personalisados nos testes para que fiquem mais legíveis e objetivos

      cy.fillName(userData.valido.nome);

      cy.fillPassword(userData.valido.senha);

      cy.registerUser();

      cy.checkMessage("O campo e-mail deve ser prenchido corretamente"); // erro de português proposital em "prenchido" pq no site de testes está assim
    });

    it("Validar campo de E-mail, preenchido com E-mail inválido", () => {
      // Preenchendo os dados do usuário usando apenas o import normal de dados

      cy.fillName(userData.valido.nome);

      cy.fillEmail(userData.invalido.email); // Testando apenas o campo de email com dado inválido

      cy.fillPassword(userData.valido.senha);

      cy.registerUser();

      cy.checkMessage("O campo e-mail deve ser prenchido corretamente");
    });
  });

  context("Campo de Senha", () => {
    it("Validar campo de senha vazio", function () {
      cy.get("#user").type(this.user.valido.nome);

      cy.get("#email").type(this.user.valido.email);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo senha deve ter pelo menos 6 dígitos");
    });

    it("Validar campo de senha, preenchido com senha inválida", function () {
      cy.get("#user").type(this.user.valido.nome);

      cy.get("#email").type(this.user.valido.email);

      cy.get("#password").type(this.user.invalido.senha);

      cy.get("#btnRegister").click();

      cy.get(".account_form")
        .should("be.visible")
        .contains("O campo senha deve ter pelo menos 6 dígitos");
    });
  });

  context("Cadastro com sucesso", () => {
    it("Cadastro realizado com sucesso!", function () {
      // Preenchendo os dados do usuário usando fixtures
      // Usando a lib FakerJs pra gerar dados aleatorios

      const randomName = faker.person.fullName();
      const ramdomEmail = faker.internet.email();
      const randomPassword = faker.internet.password();

      cy.get("#user").type(randomName);

      cy.get("#email").type(ramdomEmail);

      cy.get("#password").type(randomPassword);

      cy.registerUser();

      cy.checkRegisterSuccess(randomName);
    });
  });
});
