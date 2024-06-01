# Projeto Prova N2

Este repositório contém o projeto da Prova N2, que consiste em uma aplicação de back-end e front-end desenvolvida para a disciplina de Programação Web. A aplicação é composta por três partes principais: API, Front-end e Pesquisa.

## Estrutura do Repositório

- **api-front**: Esta pasta contém a aplicação front-end desenvolvida em Angular. Esta aplicação se conecta à API back-end para obter e manipular dados.
- **api**: Esta pasta contém a aplicação back-end desenvolvida em Spring Boot. A aplicação se conecta ao banco de dados e fornece endpoints para serem consumidos pelo front-end.
- **pesquisa**: Esta pasta contém as pesquisas realizadas conforme solicitado na prova.

## Tecnologias Utilizadas

- **Back-end**: Spring Boot
- **Front-end**: Angular
- **Banco de Dados**: [Especifique o banco de dados utilizado, ex: MySQL, PostgreSQL, etc.]

## Configuração e Execução

### Back-end (Spring Boot)

1. **Pré-requisitos**:
    - Java 11 ou superior
    - Maven
    - Banco de dados configurado (MySQL, PostgreSQL, etc.)

2. **Configuração**:
    - Configure o arquivo `application.properties` ou `application.yml` com as informações do banco de dados.

3. **Execução**:
    ```bash
    cd api
    mvn spring-boot:run
    ```

### Front-end (Angular)

1. **Pré-requisitos**:
    - Node.js
    - Angular CLI

2. **Instalação**:
    ```bash
    cd api-front
    npm install
    ```

3. **Execução**:
    ```bash
    ng serve
    ```
    A aplicação estará disponível em `http://localhost:4200`.

### Pesquisa

A pasta `pesquisa` contém arquivos e documentos das pesquisas realizadas para a prova. Consulte os documentos para mais detalhes.

## Como Funciona

### Fluxo de Dados

1. O front-end faz requisições HTTP para a API do back-end.
2. A API do back-end processa as requisições, realiza operações no banco de dados e retorna os dados solicitados para o front-end.
3. O front-end exibe os dados recebidos da API e permite interações do usuário, como criar, ler, atualizar e deletar dados.

### Endpoints da API

Os principais endpoints disponíveis na API são:

- **GET /api/entidade**: Retorna uma lista de entidades.
- **POST /api/entidade**: Cria uma nova entidade.
- **PUT /api/entidade/{id}**: Atualiza uma entidade existente.
- **DELETE /api/entidade/{id}**: Deleta uma entidade existente.

(Especifique os endpoints reais e as entidades utilizadas no seu projeto)

## Contribuição

Para contribuir com este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.
2. Crie uma branch para sua feature ou correção (`git checkout -b feature/nome-da-feature`).
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova feature'`).
4. Faça push para a branch (`git push origin feature/nome-da-feature`).
5. Abra um Pull Request.

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**Nota**: Certifique-se de atualizar as instruções conforme as especificidades e necessidades reais do seu projeto.
