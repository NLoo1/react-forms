import { useState } from 'react'
import Todo from './Todo'
import NewTodoForm from './NewTodoForm'
import { v4 as uuidv4 } from 'uuid';

function TodoList({todosList}) {
    const [todos, setTodos] = useState(todosList)

    function addTask(newTask){
        setTodos(todos => [...todos, {...newTask}])
    }

    return (
        <ul>
          {todos.map((todo) => (
            <li>
                <Todo
              text={todo.props.text}
              key={uuidv4()}
               /></li>
               
          ))}
    
          <NewTodoForm addTask={addTask} />
        </ul>
        
      );
}

TodoList.defaultProps = {
    todosList:
    [
        <Todo text="Water the dog" />,
        <Todo text="Feed the garden" />,
        <Todo text="Eat the toothpaste" />,
    ]
}

export default TodoList
