# Boosu

Boosu é um web app e mobile, criado com o intuito de integrar o garçom com a cozinha.

![Logo](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/th5xamgrr6se0x5ro4g6.png)

## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env.example (renomear para .env)

`PORT`

`MONGOOSE_URL`

## Rodando localmente

Clone o projeto

```bash
  git clone https://github.com/Alexsandro-ms/boosu.git
```

Entre no diretório do projeto

```bash
  cd boosu
```

Instale as dependências do web.

```bash
  cd web && npm install # ou yarn
```

Agora instale as dependências da api.

```bash
  cd ../api && npm install # ou yarn
```

Rodando o servidor da api.

```bash
  npm start # ou yarn start
```

Rodando servidor da aplicação web.

```bash
  cd ../web && npm start # ou yarn start
```

Rodando servidor da aplicação mobile.

```bash
  cd ../mobile && npx expo start # ou yarn expo start
```

## Stack utilizada

**Front-end:** React, Axios, Styled Components e Typescript.

**Back-end:** Node, Express, Multer, Socket.Io, Typescript, Mongoose e MongoDb Atlas.
