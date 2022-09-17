import logo from './logo.svg'
import { useState } from 'react'
import './App.css'
import AddTodoForm from './components/AddTodoForm'
import TodoItem from './components/TodoItem/TodoItem'

function App() {
  const [list, setList] = useState([])
  const [categories, setCategories] = useState([
    {
      category: 'eğitim',
      statusList: [
        'ders saati belirlendi',
        'ders başladı',
        'dersteyiz',
        'ders bitti ödevverildi',
        'ödevler kontrol edildi',
      ],
    },
    'eğitim',
    'ev işleri',
    'profesyon',
  ])

  const [statusList, setStatusList] = useState([
    { color: 'green', text: 'not-started' },
    { color: 'yellow', text: 'started' },
    { color: 'blue', text: 'ongoing' },
    { color: 'purple', text: 'almonst-done' },
    { color: 'red', text: 'done' },
  ])

  const handleAddTodo = ({ text, category }) => {
    setList((prev) => [
      ...prev,
      {
        text,
        category,
        date: new Date().toLocaleDateString(),
        status: { color: 'green', text: 'not-started' },
      },
    ])
   
  }

  const handleStatusChange = (idx, status) => {
    console.log('fired', idx, status)
    setList((prev) =>
      prev.map((item, itemIdx) => ({
        ...item,
        status: itemIdx === idx ? status : item.status,
      }))
    )
  }

  return (
    <div className="App">
      <AddTodoForm
        categories={categories}
        defaultValue=""
        onAddTodo={handleAddTodo}
      />
      <br />
      {list.map((item, idx) => (
        <TodoItem
          key={idx}
          onStatusChange={handleStatusChange}
          item={item}
          idx={idx}
          statusList={statusList}
        />
      ))}
    </div>
  )
}

export default App
