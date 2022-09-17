import React from 'react'

const TodoItem = (props) => {
  const handleStatusChange = (event) => {
    props.onStatusChange(props.idx, event.target.value)
  }
  return (
    <p key={props.idx} style={{backgroundColor:props.item.status.color}}>
      {props.item.text}-{props.item.category}-{props.item.date}-
      <select defaultValue={props.item.status} onChange={handleStatusChange}>
        {props.statusList.map((status, idx) => (
          <option
            key={idx}
            value={status.text}
          >
            {status}
          </option>
        ))}
      </select>
    </p>
  )
}

export default TodoItem
