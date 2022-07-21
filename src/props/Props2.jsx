import React from "react";

const Props2 = (props) => {
    return (
        <div>
            <h1>Hello {props.name} from {props.city}</h1>
            {props.children}
        </div>
    )
}

export default Props2;