import React, { Component } from 'react'


//order of execution
//1.Constructor
//2 getDerivedStateFromProps
//3 render
//4 comonentDidMount


class UpdateLifeCycleB extends Component {

  constructor(props) {
    super(props)

    this.state = {
      name: "Deven"
    }
    console.log("LifeCycleB constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleB getDerivedStateFromProps")
    return null
  }

  componentDidMount() {
    console.log("LifeCycleB ComponentDidMount");
  }


  //This method can prevent default behaviour by returning false
  shouldComponentUpdate() {
    console.log("LifeCycleB shouldComponentUpdate")
    return true
  }

  getSnapshotBeforeUpdate() {
    console.log("LifeCycleB getSnapshotBeforeUpdate")
    return null
  }

  componentDidUpdate() {
    console.log("LifeCycleB componentDidUpdate");
  }


  render() {
    console.log("LifeCycleB render")
    return <div>LifeCycle B</div>

  }
}

export default UpdateLifeCycleB