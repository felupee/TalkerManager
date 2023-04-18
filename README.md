<p align="center">
  <img src="https://user-images.githubusercontent.com/94487469/232813626-55641600-f069-4159-8585-31cdf73710d0.png">
</p>


Olá, seja bem vindo ao repositório do projeto Talker Manager! Aqui você irá aprender como instalar e testar o projeto na sua máquina, mas caso queira uma explicação mais detalhada sobre o Talker Manager e suas funcionalidades, sem precisar baixar e executar o projeto, recomendo você a visitar meu portifólio clicando [aqui](https://felupee.github.io/back-end/projetos/talker-manager/talker-manager.html).

## Como usar

Usando o Thunder Client ou uma ferramenta de sua escolha, você pode testar todas as rotas disponíveis no projeto.

### Requisitos

Este projeto pode ser executado de duas formas distintas: a primeira exige a instalação do NODE, enquanto a segunda possibilita o uso do Docker para rodar em uma máquina virtual.

### Instalação
#### Com docker:

- Rode o serviço node com o comando `docker-compose up -d.`

- Esse serviço irá inicializar um container chamado `talker_manager.`
A partir daqui você pode rodar o container via CLI ou abri-lo no VS Code.
- Use o comando `docker exec -it talker_manager bash.`

Ele te dará acesso ao terminal interativo do container criado pelo compose, que está rodando em segundo plano.
- Instale as dependências com npm install

- Execute a aplicação com `npm start` ou `npm run dev`

#### Sem docker:

- Instale as dependências com `npm install`

Para rodar o projeto desta forma, obrigatoriamente você deve ter o node instalado em seu computador.

### Configuração

Depois de instalar as dependências, basta rodar o comando `npm run dev` para o server ficar online e você poderá fazer requisições a vontade

### Execução

Depois de instalar as dependências, basta rodar o comando `npm run dev` para o server ficar online e você poderá fazer requisições a vontade. Sugiro utilizar o `Thunder Client` ou alguma outra ferramenta de sua escolha. 
exemplo de rota do projeto: `http://localhost:3000/talker`

## Contato

Caso você tenha alguma dúvida sobre esse projeto ou queira da um feedback você encontra minha redes sociais no meu portifólio clicando [aqui](https://felupee.github.io/#contact).
