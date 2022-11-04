#

<h2 align ='start'> API </h2>

URL heroku

#

<h1 align ='center'> Criar usuário </h1>

`POST /user`

#

### Essa rota precisa passar obrigatoriamente um "name, email, password e isAdm". O isAdm servirá para criação de jogos pois apenas usuários administradores conseguirão criar novos jogos

```json
{
  "name": "User",
  "email": "user@gmail.com",
  "age": 28,
  "password": "123",
  "isAdm": true
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "id": "15a8e5db-7e96-42e1-bee5-fca963f5ed47",
  "name": "User",
  "email": "user@gmail.com",
  "age": 28,
  "isAdm": true,
  "isActive": true,
  "createdAt": "2022-10-31T14:48:53.752Z",
  "updatedAt": "2022-10-31T14:48:53.752Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso já tenha e-mail cadastrado

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "Email Already Exists"
}
```

Caso não tenha preenchido o "name", email, age, password ou isAdm

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "name is a required field"
}
```

#

<h1 align ='center'> Login usuário </h1>

`POST /login`

#

```json
{
  "email": "user@gmail.com",
  "password": "123"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Imlnb3IzQGdtYWlsLmNvbSIsImlhdCI6MTY2NzMwNjg2MywiZXhwIjoxNjY3MzkzMjYzLCJzdWIiOiI2MDEwZGFlNy00NmM3LTRkMDMtYWEyYS1mZmY0OGVlZDgyNDQifQ.ILJAeWbdpucEqsdWow198hFFKJ6u3be2hTLnVp3kI2E"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso o e-mail ou senha estejam errados

` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "Wrong email/password"
}
```

Caso o usuário não esteja ativo

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "User isn't active"
}
```

#

<h1 align ='center'> Listar todos os usuários </h1>

`GET /users`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Retorna todos os usuários criados na API, porém apenas usuários administradores conseguem acessar essa rota

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
[
  {
    "id": "15a8e5db-7e96-42e1-bee5-fca963f5ed47",
    "name": "User",
    "email": "user@gmail.com",
    "age": 28,
    "isAdm": true,
    "isActive": true,
    "createdAt": "2022-10-31T14:48:53.752Z",
    "updatedAt": "2022-10-31T14:48:53.752Z"
  },
  {
    "id": "66c98b40-7623-4819-8238-4501fb1cd2b9",
    "name": "User 2",
    "email": "user2@gmail.com",
    "age": 20,
    "isAdm": false,
    "isActive": true,
    "createdAt": "2022-10-31T19:24:54.115Z",
    "updatedAt": "2022-10-31T19:24:54.115Z"
  },
  {
    "id": "d1e411ea-5b7e-470c-b8fd-3497e30a1298",
    "name": "User 3",
    "email": "user3@gmail.com",
    "age": 25,
    "isAdm": false,
    "isActive": false,
    "createdAt": "2022-10-31T19:38:59.511Z",
    "updatedAt": "2022-10-31T19:40:15.554Z"
  }
]
```

<h2 align ='center'> Possíveis erros </h2>

Caso o usuário não seja administrador

` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "User is not admin"
}
```

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Listar um usuário </h1>

`GET /users/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Retorna apenas o usuário passado pelo id

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "id": "15a8e5db-7e96-42e1-bee5-fca963f5ed47",
  "name": "User",
  "email": "user@gmail.com",
  "age": 28,
  "isAdm": true,
  "isActive": true,
  "createdAt": "2022-10-31T14:48:53.752Z",
  "updatedAt": "2022-10-31T14:48:53.752Z"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Atualizar informações do usuário </h1>

`PATCH /users/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Essa rota pode ser atualizado pelo próprio usuário, ou por um usuário administrador. É preciso informar name, email, age ou password para atualizar algum desses campos

## Alguns campos não podem ser atualizados como: isActive, isAdm e id.

```json
{
  "name": "Usuário"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "message": "User updated"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso tente atualizar algum campo que não pode ser atualizado

`FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "isActive cannot be changed"
}
```

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Deletar um usuário </h1>

`DELETE /users/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### O usuário dono pode deletar apenas o seu próprio usuário, administradores conseguem deletar qualquer usuário.

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Carrinho do usuário </h1>

`POST /cart`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### É preciso informar o id do game para conseguir adicionar games ao carrinho

```json
{
  "game_id": "a502eb4a-0697-4e53-ad42-b44c0e25ad5e"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "id": "57c60449-c2b0-4b74-bcb1-09a29bc0032b",
  "subtotal": 199.99,
  "games": [
    {
      "id": "a502eb4a-0697-4e53-ad42-b44c0e25ad5e",
      "name": "God of War 2",
      "price": 199.99,
      "age": 18,
      "launch": "2022-10-31",
      "isActive": true,
      "description": "Um jogo muito massa",
      "developer": "ABD",
      "image": "teste"
    }
  ]
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

Caso o jogo já esteja no carrinho

` FORMATO DA RESPOSTA - STATUS 409 CONFLICT`

```json
{
  "message": "Game is already in the cart"
}
```

Caso o id de game esteja errado

` FORMATO DA RESPOSTA - STATUS 404 NOT FOUND`

```json
{
  "message": "Game not found"
}
```

#

<h1 align ='center'> Listar todos os games do usuário no carrinho </h1>

`GET /cart`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Retorna todos os games colocados no carrinho do usuário

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "id": "57c60449-c2b0-4b74-bcb1-09a29bc0032b",
  "subtotal": 199.99,
  "games": [
    {
      "id": "a502eb4a-0697-4e53-ad42-b44c0e25ad5e",
      "name": "God of War 2",
      "price": 199.99,
      "age": 18,
      "launch": "2022-10-31",
      "isActive": true,
      "description": "Um jogo muito massa",
      "developer": "ABD",
      "image": "teste"
    }
  ]
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Deletar o game no carrinho do usuário </h1>

`DELETE /cart/game_id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Deleta um game através do id do game do carrinho

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```






<h1 align ='center'> Criar Games </h1>

`POST /games`

#

### Essa rota precisa passar obrigatoriamente um name, price, launch, description, developer, image. É necessário estar autenticado e Apenas usuários administradores conseguirão criar games

```json
{
  "name": "Bleach: Blade Battlers 2",
  "price": 23,
  "age": 34,
  "launch": "27/09/2007",
  "description": "Na série Blade Battlers, o jogador assume o controle de um dos muitos personagens originais do mangá. Como a maioria dos outros jogos de luta a idéia é combater a personagem adversário, ou permanecer em batalha no modo freefor-all, até que sua saúde esteja totalmente esgotada",
  "developer": "Racjin",
  "image": "https://tcrf.net/images/4/4e/Bleach_Blade_Battlers_2_-_Title.png"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 201 CREATED`

```json
{
  "name": "Bleach",
  "price": 23,
  "age": 34,
  "launch": "2007-09-27",
  "developer": "Racjin",
  "description": "Na série Blade Battlers, o jogador assume o controle de um dos muitos personagens originais do mangá. Como a maioria dos outros jogos de luta a idéia é combater a personagem adversário, ou permanecer em batalha no modo freefor-all, até que sua saúde esteja totalmente esgotada",
  "image": "https://tcrf.net/images/4/4e/Bleach_Blade_Battlers_2_-_Title.png",
  "id": "72ccd194-4ac5-4f96-bf8f-747349849749",
  "isActive": true
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso já tenha sido cadastrado o jogo

` FORMATO DA RESPOSTA - STATUS 400 BAD REQUEST`

```json
{
  "message": "This game already exists"
}
```

Caso não tenha sido preenchido "name", "price", "age", "launch", "developer","description", "image"

` FORMATO DA RESPOSTA - STATUS 500 Internal Server Error`

```json
{
  "message": "Internal server error"
}
```

Caso o usuário não seja administrador

` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "User is not admin"
}
```


#

<h1 align ='center'> Listar todos os  Games </h1>

`GET /games`

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}
#

#

### Essa rota é responsável por listar todos os Games e lista todos os jogos tanto os que estao ativos quanto os que não estão

#

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
[
  {
    "id": "6c8c6e6c-7b17-4aac-a315-4d0f5b1cf6dd",
    "name": "Naruto",
    "price": 23,
    "age": 34,
    "launch": "2018-10-22",
    "isActive": true,
    "description": "um jogo sobre ninjas ",
    "developer": "Bandai CAMPCOM",
    "image": "https://oxentesensei.com.br/wp-content/webp-express/webp-images/uploads/2022/03/curiosidades-Sasuke-Uchiha-capa.jpg.webp"
  },
  {
    "id": "431926d9-4c92-45ee-8eda-8dd5d0feb65b",
    "name": "Bleach Brave Souls",
    "price": 23,
    "age": 18,
    "launch": "2020-08-17",
    "isActive": false,
    "description": "um jogo sobre espadas",
    "developer": "Bandai CAMPCOM",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/header.jpg?t=1667210470"
  }
]
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid token"
}
```

<h1 align ='center'> Listar um Game </h1>

`GET /games/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Além disso, para essa rota ser acessada é necessário permissão de administrador

#

### Retorna apenas o game passado pelo id

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "id": "431926d9-4c92-45ee-8eda-8dd5d0feb65b",
  "name": "Bleach Brave Souls",
  "price": 23,
  "age": 18,
  "launch": "2020-08-17",
  "isActive": false,
  "description": "um jogo sobre espadas",
  "developer": "Bandai CAMPCOM",
  "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/header.jpg?t=1667210470"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid token"
}
```

Caso o usuário não seja administrador
` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "User is not admin"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

<h1 align ='center'> Listar todos os games ativos  </h1>

`GET /games/isActive`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

#

### Retorna apenas o game passado pelo id

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "id": "431926d9-4c92-45ee-8eda-8dd5d0feb65b",
  "name": "Bleach Brave Souls",
  "price": 23,
  "age": 18,
  "launch": "2020-08-17",
  "isActive": false,
  "description": "um jogo sobre espadas",
  "developer": "Bandai CAMPCOM",
  "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1201240/header.jpg?t=1667210470"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid token"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Atualizar informações de um game </h1>

`PATCH /games/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo Authorization", dessa forma:

> Authorization: Bearer {token}

Além disso, essa rota só pode ser acessada por usuários administradores

#

### Essa rota pode ser atualizado pelo próprio usuário, ou por um usuário administrador. É preciso informar "name", "price", "age", "launch", "developer","description", "image" ou "id" ou para atualizar algum desses campos

## Alguns campos não podem ser atualizados como: isActive e id

```json
{
  "name": "Bleach Brave Souls2"
}
```

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 200 OK`

```json
{
  "message": "Game updated"
}
```

<h2 align ='center'> Possíveis erros </h2>

Caso tente atualizar algum campo que não pode ser atualizado

`FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "isActive cannot be changed"
}
```

Caso o usuário não seja administrador
` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "User is not admin"
}
```

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

Caso o id do game esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Game not found"
}
```

Caso o token esteja errado

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Invalid Token"
}
```

#

<h1 align ='center'> Deletar um Game</h1>

`DELETE /games/:id`

#

## Essa rota necessita de autenticação

Rotas que necessitam de autenticação devem ser informado no cabeçalho da requisição o campo "Authorization", dessa forma:

> Authorization: Bearer {token}

Além disso, essa rota só pode ser acessada por usuários administradores

#

### Um usuário dono pode deletar seu game e administradores conseguem deletar qualquer game.

Caso dê tudo certo, a resposta será assim:

`FORMATO DA RESPOSTA - STATUS 204 NO CONTENT`

```json
No body returned for response
```

<h2 align ='center'> Possíveis erros </h2>

Caso não passe o token no campo "Authorization"

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Token not found"
}
```

Caso seja passado o id errado do game

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Game not found"
}
```

Caso o usuário não seja administrador

` FORMATO DA RESPOSTA - STATUS 403 FORBIDDEN`

```json
{
  "message": "User is not admin"
}
```

Caso o game já tenha sido exclúido

` FORMATO DA RESPOSTA - STATUS 401 UNAUTHORIZED`

```json
{
  "message": "Game Already excluded"
}
```
