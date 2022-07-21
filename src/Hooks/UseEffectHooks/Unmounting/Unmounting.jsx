import React, { useState } from 'react'
import UnmountComponent from './UnmountComponent'

function Unmounting() {

    const [display , setDisplay] = useState(true)

  return (
    <div>
        <button onClick={()=> setDisplay(!display)}>Toggle Display</button>
        {display && <UnmountComponent />}
    </div>
  )
}

export default Unmounting