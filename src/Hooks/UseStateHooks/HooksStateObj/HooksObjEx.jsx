import React, { useState } from 'react'

function HooksObjEx() {
    const [car, setCar] = useState({ regulerCar: '', sportsCar: '' })
    return (
        <div>
            <form>
                <input type="text"
                    value={car.regulerCar}
                    onChange={e => setCar({ ...car, regulerCar: e.target.value })}
                />
                <input type="text"
                    value={car.sportsCar}
                    onChange={e => setCar({ ...car, sportsCar: e.target.value })}
                />
                <h1>Reguler Car is {car.regulerCar}</h1>
                <h1>Sports car is {car.sportsCar}</h1>
            </form>
        </div>
    )
}

export default HooksObjEx
