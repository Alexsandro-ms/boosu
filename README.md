# Boosu

Boosu é um web app e mobile, criado com o intuito de integrar o garçom com a cozinha.

### Clonando Repositório

Abra seu terminal e clone o repositório

```bash
   $ git clone https://github.com/Alexsandro-ms/boosu.git
```

## Demonstração

Criação de pedidos a partir do app mobile e alteração, do status de pedido aparti do app web.

![App Screenshot](https://i.ibb.co/Zmvt0sX/ajdb-GVo-DWO.gif/468x300?text=App+Screenshot+Here)

## Stack utilizada

**Front-end:** React, Axios, Styled Components e Typescript.

**Back-end:** Node, Express, Multer, Socket.Io, Typescript, Mongoose e MongoDb Atlas.

**Mobile:** React Native, Styled components, Axios, Expo e Typescript.

## Api

### Funcionalidades

- Listagem de categorias
- Criação de categorias
- Listagem de produtos por categorias
- Listagem de produtos
- Criação de produtos
- Listagem de ordens / pedidos
- Mudança do status de ordens / pedidos
- Deletar / cancelar ordens / pedidos
- Criar ordens / pedidos

### Variáveis de Ambiente

Para rodar esse projeto, você deverá criar um arquivo .env na pasta de api, e adicionar as seguintes variáveis:

`PORT` Porta na qual o servidor vai rodar.

`MONGOOSE_URL` Url do seu banco de dados.

### Instalação

Com o terminal, acesse o diretório que foi clonado o repositório.

```bash
  cd api
  npm install ## ou yarn
  npm run dev ## ou yarn dev
```

## Documentação da API

### Categorias

#### Retorna todas as categorias

```http
  GET /categories/
```

#### Cria uma nova categoria

```http
  POST /categories/
```

| **Requisição** | **Tipo** | **Descrição**                                             |
| :------------- | :------- | :-------------------------------------------------------- |
| `icon / name`  | `string` | Obrigatório. O nome e icone da categoria que deseja criar |

#### Retorna produtos por categorias

```http
  GET /categories/${categoryId}/products
```

| **Parâmetro** | **Tipo** | **Descrição**                                                |
| :------------ | :------- | :----------------------------------------------------------- |
| `id`          | `string` | Obrigatório. O ID da categoria que deseja listar os produtos |

### Produtos

#### Retorna todos os produtos

```http
  GET /products
```

#### Cria um novo produto

```http
  GET /products
```

| **Headers**    | **Tipo**                           | **Descrição**                                                |
| :------------- | :--------------------------------- | :----------------------------------------------------------- |
| `Content-type` | `multipart/form-data`              | Obrigatório. O ID da categoria que deseja listar os produtos |
| **Requisição** | **Tipo**                           | **Descrição**                                                |
| `name`         | `string`                           | Obrigatório. Nome do produto                                 |
| `description`  | `string`                           | Obrigatório. Descrição do produto                            |
| `image`        | `file`                             | Obrigatório. Imagem do produto                               |
| `price`        | `number`                           | Obrigatório. Preço do produto                                |
| `category`     | `string`                           | Obrigatório. Id da categoria do produto                      |
| `ingredients`  | `string[{"name": "", "icon": ""}]` | Obrigatório. Ingredientes do produto                         |

### Ordem / Pedidos

#### Retorna todos as ordens/pedidos

```http
  GET /orders/
```

#### Mudança no status de ordens/pedidos

```http
  PATCH /orders/${id}
```

| **Parâmetro**  | **Tipo** | **Descrição**                                   |
| :------------- | :------- | :---------------------------------------------- |
| `id`           | `string` | Obrigatório. O ID do item que você quer alterar |
| **Requisição** | **Tipo** | **Descrição**                                   |
| `status`       | `string` | Obrigatório. Novo status da order               |

#### Apagar/cancelar uma ordem/pedido

```http
  DELETE /orders/${id}
```

| **Parâmetro** | **Tipo** | **Descrição**                                   |
| :------------ | :------- | :---------------------------------------------- |
| `id`          | `string` | Obrigatório. O ID do item que você quer deletar |

```http
  POST /orders/
```

| **Requisição** | **Tipo**                                    | **Descrição**                                                                    |
| :------------- | :------------------------------------------ | :------------------------------------------------------------------------------- |
| `table`        | `number`                                    | Obrigatório. Número da mesa                                                      |
| `products`     | `string[{"productId": "", "quantity": 0"}]` | Obrigatório. Array de produtos que recebe ID do produto e quantidade de produtos |

## Web

## Funcionalidades

- Listagem de ordens / pedidos
- Mudança no status de ordens / pedidos
- Cancelamento / deletar ordens / pedidos

## Instalação

Com o terminal aberto, digite:

```bash
  cd ../web
  npm install ## ou yarn
  npm run dev ## ou yarn dev
```

## Mobile

## Funcionalidades

- Listagem de produtos
- Criação de ordens / pedidos
- Seleção de produtos por categoria

### Instalação

Ainda com terminal aberto:

```bash
  cd ../mobile
  npm install ## ou yarn
  npm run ## ou yarn expo start
```

### Rodando

Após instalar as dependências e rodar o servidor, baixe o app do expo go na play store e apple store, após baixar, leia o qr code que aparece no terminal.

## Autores

- [@alexsandrom-s](https://www.github.com/alexsandro-ms)

## Licença

Para informações de uso, modificação, distribuição e etc... Ler a licença abaixo:

[MIT](https://choosealicense.com/licenses/mit/)
