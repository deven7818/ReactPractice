import React, { Component } from 'react'
import UpdateLifeCycleB from './UpdateLifeCycleB';


//order of execution
//1.Constructor
//2 getDerivedStateFromProps
//3 render
//4 comonentDidMount

//whrn add child component then constructor ,getDerivedStateFromProps and render from parent 
//and all menthod from child them componentDidMount from parent

class UpdateLifeCycleA extends Component {

    //Special function that will get called whenever new component is creacted
    constructor(props) {
        super(props)

        this.state = {
            name: "Deven"
        }
        console.log("LifeCycleA constructor");
    }

    //called every time when component is re-renderd
    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA getDerivedStateFromProps")
        return null
    }

    //Called only once in whole life cycle of given component
    componentDidMount() {
        console.log("LifeCycleA ComponentDidMount");
    }

    //This method can prevent default behaviour by returning false
    shouldComponentUpdate(){
        console.log("LifeCycleA shouldComponentUpdate")
        return true
    }

    getSnapshotBeforeUpdate() {
        console.log("LifeCycleA getSnapshotBeforeUpdate")
        return null
    }

    componentDidUpdate() {
        console.log("LifeCycleA componentDidUpdate");
    }

    changeState = () =>{
        this.setState({
            name: 'Devendra'
        })
    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                <div>LifeCycle A</div>
                <button onClick={this.changeState}>Change State</button>
                <UpdateLifeCycleB />
            </div>
        )

    }
}

export default UpdateLifeCycleA