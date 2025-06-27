# Community Library

Este é um projeto de uma biblioteca comunitária onde os usuários podem postar livros para compartilhar com outros usuários e também emprestar livros de outros membros da comunidade.

## Instalação

### Pré-requisitos

- Node.js (v14.x ou superior)
- npm (Node Package Manager) ou yarn

### Passos para instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/community-library.git
```

Acesse o diretório do projeto:

```bash
cd community-library
```

Instale as dependências:

Com npm:

```bash
npm install
```

Com yarn:

```bash
yarn install
```

Crie um arquivo `.env` na raiz do projeto e adicione suas variáveis de ambiente. Exemplo:

```
PORT=3000
SECRET=your_jwt_secret
```

Substitua `your_jwt_secret` por um hash SHA256 usado para assinar tokens JWT.

#### Gerando uma chave secreta SHA256

Você pode gerar uma chave secreta com SHA256 executando o seguinte comando no terminal:

```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

Isso gerará uma chave secreta aleatória de 256 bits em formato hexadecimal.

Inicie o servidor:

Com npm:

```bash
npm start
```

Com yarn:

```bash
yarn start
```

O servidor estará em execução em [http://localhost:3000](http://localhost:3000).

## Rotas

- `/users`: Operações de usuários (criar, listar, buscar por ID, atualizar, excluir)
- `/books`: Operações de livros (criar, listar, buscar por ID, atualizar, excluir)
- `/loans`: Operações de empréstimos (criar, listar, buscar por ID, excluir)

## Tecnologias Utilizadas

- Node.js
- Express.js
- SQLite (ou outro banco de dados de sua escolha)
- JSON Web Tokens (JWT) para autenticação
- Zod para validação de esquemas de dados

## Contribuição

Se você gostou do projeto e deseja contribuir, fique à vontade para abrir uma issue ou enviar um pull request. Todas as contribuições são bem-vindas!

Obrigado por acessar o projeto e por considerar contribuir para torná-lo ainda melhor!