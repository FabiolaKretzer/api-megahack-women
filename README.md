# Api MegaHack Women

## Sumário

- [Tecnologias](#tecnologias)
- [APIs da Gr1d](#apis-da-gr1d)
- [Instalação](#instalação)
- [Database](#database)
- [Executar](#executar)
- [Rotas](#rotas)

## Tecnologias

- nodejs

- express

- axios

- knex

## APIs da Gr1d
- API Consulta meuScore: É um serviço de classificação de pontuação de score, calculado por algoritmos, para demonstrar sua reputação financeira.

- API Renda Provável: Permite estimar a renda domiciliar em uma determinada localização utilizando a latitude e a longitude de um local.

- API Localiza Veículos: Permite consultar através do CPF/CNPJ todos os veículos que já foram licenciados nestes documentos.

- API Precificador: Permite que sejam identificados os preços dos veículos, de acordo com a tabela FIPE, unicamente através da interpretação dos nº de chassi.

## Instalação

- Criar arquivo `.env` com as seguintes informações:

```
PORT=3000
HOST=localhost
CREDENTIAL_PROSCORE=(De acordo com sua credencial na grid)
CREDENTIAL_VEHICLES=(De acordo com sua credencial na grid)
CREDENTIAL_INCOME=(De acordo com sua credencial na grid)
CREDENTIAL_FIPE=(De acordo com sua credencial na grid)
```

- Instalar as dependências do projeto:

```
npm install
```

## Database

- Para criar o banco de dados:

```
yarn knex:migrate
```

- Para popular o banco de dados com os dados fornecidos:

```
yarn knex:seed
```

> O projeto foi desenvolvido utilizando o banco de dados Sqlite, porém a implementação foi feita utilizando o knex. Dessa forma, para utilizar outros bancos que se achar conveniente basta trocar as configurações do arquivo ./knexfile.js e ./src/database/connection.js

## Executar

- Executar:

```
npm run start
```

## Rotas

### User

- Rota para pegar o usuário que está logado no app:

```
GET http://localhost:3000/user
```

```
headers: {
    "token": "string"
}
```

### Limit

- Rota para calcular o limite de empréstimo de um usuário:

```
GET http://localhost:3000/limit
```

```
headers: {
    "token": "string",
	"phone": "string", // model phone
	latitude: "string", 
	longitude: "string"
}
```