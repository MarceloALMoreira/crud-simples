import { Todo } from "../../App";
import "./styles.css";

type CardProps = {
  todo: Todo;
  completedTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
};

const Card = ({ todo, completedTodo, deleteTodo }: CardProps) => {
  const handleCompletedTodo = () => {
    completedTodo(todo.id);
  };

  const handleDeleteTodo = () => {
    deleteTodo(todo.id);
  };
  return (
    <div className={`card ${todo.completed ? "done" : ""}`}>
      <h2>{todo.title}</h2>

      <div className="card-buttons">
        <button onClick={handleCompletedTodo}>
          {todo.completed ? "Retomar" : "Completar"}
        </button>
        <button onClick={handleDeleteTodo}>Deletar</button>
      </div>
    </div>
  );
};

export default Card;
