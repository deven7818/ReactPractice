import React, { useEffect, useState } from 'react'

function UnmountComponent() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePosition)

        //Component Unmounting Code -- cleanup code
        return () => {
            console.log("Component Unmounting");
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])


    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}

export default UnmountComponent