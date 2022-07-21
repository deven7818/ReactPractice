import React, { Component } from 'react'

class Mounting extends Component {

    //Special function that will get called whenever new component is creacted
    constructor(props) {
        console.log("Constructor");
        super(props)

        this.state = {
            counter: 0
        }
        
    }
    componentDidMount(){
        console.log("Component Did Mount");

    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Component Did Update");
    }
 
    componentWillUnmount(){
        console.log("Component Will Unmount");
    }

    static getDerivedStateFromProps(props, state) {
        return { favoriteCar: props.favcar };
        
    }

    increment = () => this.setState({counter:this.state.counter+1})
    decrement = () => this.setState({counter:this.state.counter-1})
    
    render() {
        console.log("Rendor");
        return (
            <div>
            <button onClick={this.increment}>Increment</button>
            <button onClick={this.decrement}>Decrement</button>
                <div>
                    Counter : {this.state.counter}
                </div>
                
            </div>
        )
    }
}

export default Mounting