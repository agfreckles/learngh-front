import { useGetTodosQuery } from "../../api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import "./todo.scss";

const TodoList = () => {
  const [newTodo, setNewTodo] = useState("");
  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetTodosQuery;

  const handleSubmit = (e) => {
    e.preventDefault();
    //addTodo
    setNewTodo("");
  };

  const newItemSection = (
    <div className="sub-page-wrapper">
      <section id="contact-form">
        <form onSubmit={handleSubmit} className="todo-form">
          <input
            type="text"
            id="new-todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Enter new todo"
          />
          <button className="submit">
            <FontAwesomeIcon icon={faUpload} />
          </button>
        </form>
      </section>
    </div>
  );

  let content;
  if ("isLoading") {
    <p>Loading . . .</p>;
  } else if ("isSuccess") {
    content = "gfghhfg"+JSON.stringify(todos);
  } else if ("isError") {
    content = <p>{error} knkjnkln </p>;
  }

  return (
    <main className="todos-main">
      {newItemSection}
      {content}
    </main>
  );
};
export default TodoList;
