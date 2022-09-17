import React, { useEffect, useState } from 'react'
import './AddTodoForm.css'

const AddTodoForm = (props) => {
  const [value, setValue] = useState({
    text: props.defaultValue,
    category: 'eğitim',
  }) //[değer , setter]
  const handleChange = (event) => {
    //console.log(event.currentTarget.name)
      setValue((prev) => ({
        ...prev,
        [event.target.name]: event.target.value,
      }))
  }

  const handleClick = () => {
    props.onAddTodo(value)
    setValue('')
  }
  return (
    <div>
      <input
        name="text"
        onChange={handleChange}
        type="text"
        value={value.text}
      />
      <select name="category" onChange={handleChange}>
        {props.categories.map((category, idx) => (
          <option key={idx} value={category}>
            {category}
          </option>
        ))}
      </select>
      <button onClick={handleClick}>Ekle</button>
    </div>
  )
}

export default AddTodoForm
