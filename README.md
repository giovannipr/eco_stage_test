## Pré-requisitos

 - Node.js >= v7
 - npm install yarn -g
   <!-- Instalar Yarn Global -->

## Rodar aplicação

- Instalar dependências  `npm i` e depois `yarn install`
- Rodar `yarn start` (ou `npm start`) desenvolvimento online em `http://localhost:3002`
- Rodar `yarn build` (ou `npm run build`) para gerar o build de produção (Arquivos gerado no diretório `dist`)

## Scripts

- `yarn start` (ou `npm start`) : Iniciar a aplicação
- `yarn build` (ou `npm run build`) : Gerar build de produção
- `yarn update-packages` : Atualizar todas as dependências para a versão atual


## Resumo da aplicação

- A aplicação apresenta duas abas, a de "Cadastrar" e a "Consultar", nelas estão todo o conteúdo.
  - Cadastrar: cadastrar a mídia desejada, sendo o campo "Data/Hora" não obrigatório
    . Complete os campos
    . Clique em no botão Cadastrar
      . Se cadastrou um pop-up irá aparecer na tela, mostrando a atração cadastrada
      . Se não cadastrou, faltou completar algum campo obrigatório, esses campos serão sinalizados com uma borda vermelha
  - Consultar:
    . "Próximos...": são as atrações que ainda serão vistas, ordenadas pelo horário, de maneira crescente
    . "Últimos vistos...": são as atrações que já foram vistas, ordenadas pelo horário, de maneira de   decrescente
    . "Sem data...": são as atrações cadastradas sem a "Data/Hora" e estão ordenados por ordem alfabética
