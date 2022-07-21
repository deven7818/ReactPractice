import React, {Component} from "react";

class Classcomp extends Component {
    render() {
        return <h1>Welcome {this.props.name} {this.props.lastName}</h1>
    }
}

export default Classcomp;