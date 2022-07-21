import React, { Component } from 'react'
import LifeCycleB from './LifeCycleB';


//order of execution
//1.Constructor
//2 getDerivedStateFromProps
//3 render
//4 comonentDidMount

//whrn add child component then constructor ,getDerivedStateFromProps and render from parent 
//and all menthod from child them componentDidMount from parent

class LifeCycleA extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "Deven"
        }
        console.log("LifeCycleA constructor");
    }
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount");
    }


    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycle A</div>
                <LifeCycleB />
            </div>
        )

    }
}

export default LifeCycleA