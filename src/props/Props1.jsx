import React from "react";

const Props1 = (props) => {
    return (
        <div>
            <h1>Hello {props.name} {props.lastName}</h1>
            {props.children}
        </div>
    )
}

export default Props1;