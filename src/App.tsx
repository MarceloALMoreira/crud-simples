import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";

// interface ou types primitivos do todo
export type Todo = {
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  //estado para pegar o valor do input
  const [todoInput, setTodoInput] = useState("");

  //estado para os todo
  const [todos, setTodos] = useState<Todo[]>(() => {
    
    // recuperando e passar para o estado setTodos
    const storedTodos = localStorage.getItem("@codersList: todos");

    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [];
  });

  // salvando os dados em localStorage
  useEffect(() => {
    localStorage.setItem("@codersList: todos", JSON.stringify(todos));
  }, [todos]);

  //Add todo no estado setTodos, pegando os todos existes.
  const handleAddTodo = () => {
    setTodos((previonsTodos) => [
      ...previonsTodos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);
    setTodoInput("");
  };

  //tipando o evento
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  //completed todo, essa function é para o meu card.
  const completedTodo = (id: number) => {
    setTodos((previusTodos) =>
      previusTodos.map((todo) =>
        todo.id !== id ? todo : { ...todo, completed: !todo.completed }
      )
    );
  };

  // delete todo
  const deleteTodo = (id: number) => {
    setTodos((previusTodos) => previusTodos.filter((todo) => todo.id != id));
  };

  return (
    <div className="App">
      <div className="add-todo">
        <input
          placeholder="Fazer café"
          value={todoInput}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>Adicionar</button>
      </div>

      {/* Map dos todos  */}
      {todos.map((todo) => (
        <Card
          key={todo.id}
          todo={todo}
          completedTodo={completedTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
};

export default App;
