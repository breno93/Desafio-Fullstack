Este é o backend da aplicação Desssafio FullStack - O objetivo dessa aplicação é conseguir com que o Cliente que usar a plataforma, possa cadastrar seus contatos.

A API tem um total de 3 endpoints, o CLIENTE podendo se cadastrar, realizar login e cadastrar seus CONTATOS.

Para começar, crie um clone deste repositório: git@github.com:breno93/Desafio-Fullstack.git

Utilize os comandos: npm install / npm run dev

Criação do CLIENTE(usuário)
POST /cliente - FORMATO DA REQUISIÇÃO
{
"nome": "clienteteste",
"email": "clienteteste@mail.com",
"password": "102030",
"telefone": "219999-999999"
}

RESPOSTA
{
"id": "e0d95570-7896-4cc7-bf67-6310f83a618d",
"nome": "clienteteste",
"email": "clienteteste@mail.com",
"telefone": "219999-999999"
}

---

Login do CLIENTE(usuário)
POST /login - FORMATO DA REQUISIÇÃO
{
"email": "clienteteste@mail.com",
"password": "102030"
}

RESPOSTA:
{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbGllbnRlTm9tZSI6ImNsaWVudGV0ZXN0ZSIsImlhdCI6MTY5MTM1OTc0NywiZXhwIjoxNjkxMzYzMzQ3LCJzdWIiOiJlMGQ5NTU3MC03ODk2LTRjYzctYmY2Ny02MzEwZjgzYTYxOGQifQ.JStZZm6G34XLIKhlBhhFAc6Ba-iFDgyShsBj8ZX1Kz4"
}

---

Listar Clientes
GET /cliente - FORMATO DA REQUISIÇÃO

RESPOSTA:
{
"id": "e0d95570-7896-4cc7-bf67-6310f83a618d",
"nome": "clienteteste",
"email": "clienteteste@mail.com",
"telefone": "219999-999999"
}

---

Atualizar Cliente
PATCH /cliente/id - FORMATO DA REQUISIÇÃO
{
"nome": "clientetesteAtualizao",
"email": "clientetesteatualizado@mail.com"
}

RESPOSTA:
{
"id": "e0d95570-7896-4cc7-bf67-6310f83a618d",
"nome": "clientetesteAtualizao",
"email": "clientetesteatualizado@mail.com",
"telefone": "219999-999999"
}

---

Deletar Cliente
DELETE /cliente/id FORMATO DA REQUISIÇÃO

RESPOSTA 204

---

Com o Cliente LOGADO, ele poderá organizar seus contatos:

Criação do CONTATO
POST /contato - FORMATO DA REQUISIÇÃO
{
"nome": "Contato do Cliente Teste",
"email": "contatodoclienteteste@mail.com",
"telefone": "21 8888-88888"
}

RESPOSTA
{
"id": "01e5ea01-2114-443f-af10-0f1984953add",
"nome": "Contato do Cliente Teste",
"email": "contatodoclienteteste@mail.com",
"telefone": "21 8888-88888",
"dataRegistro": "2023-08-06T22:14:31.142Z"
}

---

Listagem dos contatos do cliente
GET /contato - FORMATO DA REQUISIÇÃO

RESPOSTA
[
{
"id": "01e5ea01-2114-443f-af10-0f1984953add",
"nome": "Contato do Cliente Teste",
"email": "contatodoclienteteste@mail.com",
"telefone": "21 8888-88888",
"dataRegistro": "2023-08-06T22:14:31.142Z"
}
]

---

Atualização do Contato
PATCH /contato/id - FORMATO DA REQUISIÇÃO
{
"nome": "Contato do Cliente Teste ATUALIZADO",
"email": "contatodoclientetesteATUALIZADO@mail.com",
"telefone": "21 7777-77777"
}

RESPOSTA
{
"id": "01e5ea01-2114-443f-af10-0f1984953add",
"nome": "Contato do Cliente Teste ATUALIZADO",
"email": "contatodoclientetesteATUALIZADO@mail.com",
"telefone": "21 7777-77777",
"dataRegistro": "2023-08-06T22:14:31.142Z"
}

---

Deletar Contato
DELETE /contato/id - FORMATO DA REQUISIÇÃO

RESPOSTA: 204
