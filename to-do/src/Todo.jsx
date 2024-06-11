import './Todo.css'

function Todo({text}) {
  return (
    <div>
      <span className="task">{text} </span>
      <button className="removeTask">X</button>
    </div>
    
  )
}

export default Todo
