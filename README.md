# API BovControl 

:star: API desenvolvida com Typescript + MongoDB + DDD + Docker + SOLID + TypeOrm

:arrow_right: Status: Finalizada :heavy_check_mark:

:triangular_flag_on_post: Descrição: API simples para realizar gerenciamento de animais.

# :arrow_forward: Como iniciar Aplicação

No terminal, navegue até o endereço no qual deseja salvar o projeto e clone utilizando a url abaixo

`git clone https://github.com/italo-lima/api-challenge-bovcontrol`

Entre na pasta do projeto

`cd api-challenge-bovcontrol`

Instale as dependências do projeto

`yarn` ou `npm install`

Execute aplicação

`yarn dev:server` ou `npm start dev:server`

:warning: Crie o banco de dados de acordo com as informações contidas no arquivo ormconfig.json.

Pronto, agora é possível conectar API utilizando [LocalHost](http://localhost:3333 "API BovControl") na porta 3333.

## Animal 

:paperclip: `POST /animals` - Criação de um animal.

#### Body example:

```
{
  "type": "Cavalo",
	"name": "Marronzinha",
	"weight": 210.5,
	"age_months": 8
}
```

#### Body response:

```
{
  "id": ObjectId,
  "name": string,
  "type": string,
  "weight": number,
  "age_months": number,
  "created_at": Date,
  "updated_at": Date
}
```

:paperclip: `get /animals`.

#### Body example:


#### Body response:

```
{
  Animal[] || []
}
```

:paperclip: `POST /animals/:id`.

#### Body response:

```
{
  "id": ObjectId,
  "type": string,
  "name": string,
  "weight": number,
  "age_months": number,
  "created_at": Date,
  "updated_at": Date
}
```

:paperclip: `PUT /animals`.

#### Body response:

```
{
  "id": "5f18daab552730061b620de7",
  "type": "Porco",
  "name": "Rosinha",
  "weight": 89.90,
  "age_months": 14
}
```

#### Body response:

```
{
  "id": ObjectId,
  "name": string,
  "type": string,
  "weight": number,
  "age_months": number,
  "created_at": Date,
  "updated_at": Date
}
```
