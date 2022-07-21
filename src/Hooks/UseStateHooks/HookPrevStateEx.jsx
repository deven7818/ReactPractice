import React, { useState } from 'react'

function HookPrevStateEx() {
    const initialColor = "red"
    const [color, setColor] = useState(initialColor)

    // const IncrementFive = () => {
    //     for (let i = 0; i < 5; i++) {
    //         setCount(prevCount => prevCount + 1)
            
    //     }
    // }

    return (
        <div>
            Color : {color}
            <button onClick={() => setColor(initialColor)}>Reset</button>
            <button onClick={() => setColor(prevState => prevState + " Green")}>Green</button>
            {/* <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={IncrementFive}>IncrementFive</button> */}
        </div>
    )
}

export default HookPrevStateEx