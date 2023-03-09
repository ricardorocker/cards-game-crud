# Gerenciador de cartas do HearthStone

Esse projeto criado do zero, consiste em uma CRUD completa feita em **ANGULAR** e Bootstrap usando localStorage como base.

## Instalando o projeto
1. Escolha o diretório onde deseja salvar o projeto na sua máquina.

2. Abra seu terminal ou git e clone o projeto utilizando o comando a seguir:
```
git clone https://github.com/ricardorocker/cards-game-crud.git
```
3. Instale as dependências do projeto, rodando o seguinte comando na raíz do projeto:
```
npm install
```

## Rodando o ambiente de desenvolvimento

1. Para rodar o ambiente de desenvolvimento, utilize o seguinte comando na raíz do projeto:
```
ng serve
```
2. Abra o seu navegador web e insira o endereço http://localhost:4200/


## Rodando a build de deploy da aplicação

1. Para rodar a build de deploy da aplicação rode o seguinte comando na raíz do projeto:
```
ng build --prod
```

## Motivação para escolher a biblioteca Bootstrap
Eu já utilizo o Bootstrap no meu dia a dia na empresa que trabalho atualmente e recentemente criei meu site pessoal com ele também. O Bootstrap facilita e acelera o desenvolvimento de sites e aplicativo, economizando tempo, aumentando a produtividade e a responsividade.

## Estrutura do projeto

Para organizar melhor a visualização da estrutura do projeto, foi removido o arquivo app.component.html e app.component.css, que são arquivos desnecessários, e criado mais três pastas:

- **Components**: 
  - default-layout.component, que é o template que o app.component referencia;
  - card-game.component, responsavel pelo template dos cards;
- **Views**: 
  - home.component, para visualização de todos cards cadastrados;
  - register.card.component, responsavel pela criação e edição dos cards com formulários reativos;
- **Services**:
  - Onde são feitas todas requisições para base(localStorage);
- **Models**:
  - cards.ts, responsavel pelo padrão dos dados do banco, tipando cada campo;
  - Enums: classes.enum.ts e types.enum.ts para popular os selects do formulário;

## Apresentação do projeto
https://user-images.githubusercontent.com/76121782/224026924-bd19875f-0138-4928-b40b-975f7c613c66.mp4
