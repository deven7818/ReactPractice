import React from 'react'
import Person from './Person'

function NameList() {

    const persons = [
        {
            id: 1,
            name: 'Devendra',
            age: 28,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Kalpesh',
            age: 28,
            skill: 'Anguler'
        },
        {
            id: 3,
            name: 'Gaurav',
            age: 29,
            skill: 'Testing'
        }

    ]
    // const names = ['Deven', 'Umesh', 'Nilesh']
    // const nameList = names.map(name => <h2>{name}</h2>)
    const personList = persons.map(person => <Person key={person.id} person={person} />)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
