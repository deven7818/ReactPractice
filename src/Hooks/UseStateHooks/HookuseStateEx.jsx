import React, { useState } from 'react'

function HookuseStateEx() {

   const [car ,setCar] = useState("Punch");

  return (
    <div>
      <h1>My favorite Car is {car}</h1>
      <button onClick={()=> setCar("Nexon")}>Car</button>
    </div>
  )
}

export default HookuseStateEx
