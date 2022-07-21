import React, { useState } from 'react'

function StateArray() {
    const [items, setItems] = useState([10,20,30])

    const addItem = () => {
        setItems([...items ,{
            id: items.length,
            value: Math.floor(Math.random() *10) +1
        }])
    }

  return (
    <div>
        <button onClick={addItem}>Add Number</button>
        <ul>
            {items.map(item => (
                <li key={item.id}>{item}{item.value}</li>
            ))}
        </ul>
    </div>
  )
}

export default StateArray