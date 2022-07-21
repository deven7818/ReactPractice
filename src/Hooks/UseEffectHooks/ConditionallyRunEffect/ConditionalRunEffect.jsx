import React, { useEffect, useState } from 'react'

function ConditionalRunEffect() {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(() => {
        console.log('Use Effect - updatting document title');
        document.h1 = `You Clicked ${count} times`
    }, [count])


    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Click {count} times</button>
            <h1>Clicked {count} times</h1>
        </div>
    )
}

export default ConditionalRunEffect