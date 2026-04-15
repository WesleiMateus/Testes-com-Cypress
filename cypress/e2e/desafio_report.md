##

validar campo de nome vazio

- Resultado esperado: Erro ao clicar no botão cadastrar, usuário deve preencher um nome válido
- Resultado obtido: Cadastro realizado sem validação.

- Credenciais usadas
  - Nome: vazio
  - E-mail: email@gmail.com
  - Senha: password123

##

validar campo de E-mail vazio

- Resultado esperado: Erro ao clicar no botão cadastrar, usuário deve preencher um E-mail válido
- Resultado obtido: Apresentado erro ao usuário, erro apresentado: "O campo e-mail deve ser prenchido corretamente"

- Credenciais usadas
  - Nome: Weslei Mateus
  - E-mail: vazio
  - Senha: password123

##

validar campo de E-mail inválido

- Resultado esperado: Erro ao clicar no botão cadastrar, usuário deve preencher um E-mail válido/existente.
- Resultado obtido: Cadastro realizado sem validação.

- Credenciais usadas
  - Nome: Weslei Mateus
  - E-mail: Email#123@invalido.com
  - Senha: password123

##

validar campo de senha vazio

- Resultado esperado: Erro ao clicar no botão cadastrar, usuário deve preencher uma senha de ao menos 6 dígitos.
- Resultado obtido: Apresentado erro ao usuário, erro apresentado: "O campo senha deve ter pelo menos 6 dígitos"

- Credenciais usadas
  - Nome: Weslei Mateus
  - E-mail: email@email.com
  - Senha: ( caractere espaço )

##

validar campo de senha inválido

- Resultado esperado: Erro ao clicar no botão cadastrar, usuário deve preencher uma senha de ao menos 6 dígitos.
- Resultado obtido: Apresentado erro ao usuário, erro apresentado: "O campo senha deve ter pelo menos 6 dígitos"

- Credenciais usadas
  - Nome: Weslei Mateus
  - E-mail: email@email.com
  - Senha: 123

##

cadastro realizado com sucesso

- Resultado esperado: Realizar o cadastro corretamente do usuário.
- Resultado obtido: Cadastro realizado.

- Credenciais usadas
  - Nome: Weslei Mateus
  - E-mail: weslei@gmail.com
  - Senha: 123@123

##
