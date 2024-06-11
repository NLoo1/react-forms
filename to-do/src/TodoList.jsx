import { useState } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from "uuid";

function TodoList({ todosList }) {
  const [todos, setTodos] = useState(
    todosList.map(todo => ({ ...todo, id: uuidv4() }))
  );

  function addTask(newTodo) {
    const todoWithId = { ...newTodo, id: uuidv4() };
    setTodos(todos => [...todos, todoWithId]);
  }

  function removeTask(id){
    setTodos(todos => todos.filter(todos => todos.id !== id))
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>
            <Todo text={todo.props.text} id={todo.id} key={todo.id} remove={removeTask} />
          </li>
        ))}
      </ul>
      <NewTodoForm addTask={addTask} />
    </div>
  );
}

TodoList.defaultProps = {
  todosList: [
    <Todo text="Water the dog" />,
    <Todo text="Feed the garden" />,
    <Todo text="Eat the toothpaste" />,
  ],
};

export default TodoList;
