# README - Projeto CRUD Simples em React

Este é um projeto simples de CRUD (Create, Read, Update, Delete) desenvolvido em React. O aplicativo permite adicionar, marcar como concluído, e excluir tarefas/to-dos. Abaixo, você encontrará uma breve documentação para entender a estrutura e funcionamento do projeto.

## Estrutura do Projeto

O projeto está estruturado da seguinte maneira:

- src
  - components
    - Card.tsx: Componente responsável por exibir cada to-do em um cartão.
  - App.css: Estilos CSS para o componente App.
  - App.tsx: Componente principal que contém a lógica do CRUD.



## Componentes Principais

### App.tsx

Este componente é a peça central do aplicativo e contém a lógica principal do CRUD. Abaixo estão as principais funcionalidades e métodos implementados:

- ### Estado do Componente:
  
  - #### todoInput: Estado para armazenar o valor do campo de input.
  - #### todos: Estado para armazenar a lista de to-dos.

- ### LocalStorage:
  - #### Utiliza o localStorage para armazenar e recuperar os to-dos. Os  to-dos são salvos no localStorage com a chave @codersList: todos.

- ### Métodos:
  - #### handleAddTodo: Adiciona um novo to-do à lista.
  - ### handleInputChange: Atualiza o estado todoInput conforme o usuário digita.
  - ### completedTodo: Marca um to-do como concluído ou não concluído.
  - ### deleteTodo: Exclui um to-do da lista.
  
- ### Renderização:
  - ### Renderiza um formulário para adicionar novos to-dos.
  - ### Mapeia a lista de to-dos e renderiza um componente Card para cada to-do. 
  
- ### Card.tsx:
  Este componente é responsável por exibir um to-do em um cartão. Recebe as propriedades todo, completedTodo, e deleteTodo para exibir as informações e fornecer interatividade.


- ### Utilização do Projeto
- Clone o repositório.
- Instale as dependências usando npm install.
- Execute o projeto com npm run dev.

- Acesse a aplicação em http://localhost:5173.

# Divirta-se explorando e modificando o projeto conforme necessário!
