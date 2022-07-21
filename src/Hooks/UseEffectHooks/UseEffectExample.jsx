import React, { useEffect, useState } from 'react'

function UseEffectExample() {

    const [count, setCount] = useState(0)

    useEffect(() => {
        document.h1 = `You Clicked ${count} times`
    })
    

  return (
    <div>
        <button onClick={() => setCount(count + 1)}>Click {count} times</button>
        <h1>Clicked {count} times</h1>
    </div>
  )
}

export default UseEffectExample