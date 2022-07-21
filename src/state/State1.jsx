import React ,{ Component } from "react";

class State1 extends Component {
    constructor(){
        super()
        this.state = {
            message: "Welcome visitor"
        }
    }

    changeMessage() {
        this.setState({
            message: "Thank you for Subcribing"
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={() => this.changeMessage()}>Subscribe</button>
            </div>
        )
    }
}

export default State1;