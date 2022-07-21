import React, {Component} from "react";

class DistructuringClass extends Component {
    render() {
        const {name , city} = this.props
        return (
        <div>
            <h1>Welcome {name} {city}</h1>
        </div>
        )
    }
}

export default DistructuringClass;