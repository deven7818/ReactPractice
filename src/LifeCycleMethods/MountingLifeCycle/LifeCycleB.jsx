import React, { Component } from 'react'


//order of execution
//1.Constructor
//2 getDerivedStateFromProps
//3 render
//4 comonentDidMount


class LifeCycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name: "Deven"
      }
      console.log("LifeCycleB constructor");
    }
    static getDerivedStateFromProps(props, state){
        console.log("LifeCycleB getDerivedStateFromProps")
        return null
    }
    
    componentDidMount() {
        console.log("LifeCycleB ComponentDidMount");
    }


  render() {
    console.log("LifeCycleA render")    
    return <div>LifeCycle B</div>
    
  }
}

export default LifeCycleB