import { ChangeEvent, useEffect, useState } from "react";
import "./App.css";

import Card from "./components/Card";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    // Verifica se o input está vazio
    if (todoInput.trim() === "") {
      //Exibi uma mensagem de erro
      toast.error("Por favor, insira uma tarefa antes de adicionar!", {
        autoClose: 1500,
      });
      return;
    }

    setTodos((previonsTodos) => [
      ...previonsTodos,
      { id: Math.random(), title: todoInput, completed: false },
    ]);
    setTodoInput("");

    // Criando uma notification
    toast.success("Tarefa adicionada com sucesso!", { autoClose: 1500 });
  };

  //tipando o evento
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoInput(e.target.value);
  };

  //completed todo, essa function é para o meu card.
  const completedTodo = (id: number) => {
    setTodos((previusTodos) =>
      previusTodos.map(
        (todo) =>
          todo.id !== id ? todo : { ...todo, completed: !todo.completed,  },
      )
    );
    const completedTask = todos.find((todo) => todo.id === id && todo.completed);

    if(!completedTask) {
      toast.success("Tarefa concluída!", { autoClose: 1500 })
    }
  };

  // delete todo
  const deleteTodo = (id: number) => {
    setTodos((previusTodos) => previusTodos.filter((todo) => todo.id != id));

    // Criando uma notification
    toast.success("Sua tarefa foi apagada!", { autoClose: 1500 });
  };

  return (
    <div className="App">
      <div className="add-todo">
        <input
          placeholder="Fazer café"
          value={todoInput}
          onChange={handleInputChange}
        />
        <ToastContainer />
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
