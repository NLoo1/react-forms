import { useState } from 'react'
const NewTodoForm = ({ addTask }) => {
  const INITIAL_STATE = {
    text: ''
  }
  const [formData, setFormData] = useState(INITIAL_STATE);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData, [name]: value}))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    formData.props = {text: formData.text}
    addTask(formData);
    setFormData(INITIAL_STATE)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Task </label>
      <input
        id="task"
        type="text"
        name="text"
        placeholder="Task"
        value={formData.text}
        onChange={handleChange}
      />
      <button>Add Task</button>
    </form>
  )

}

export default NewTodoForm;


