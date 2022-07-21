import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)

        this.state = {
            isLogedIn: true 
        }
    }

    render() {


        return this.state.isLogedIn && <div>Welcome Deven</div>
        

        // return this.state.isLogedIn ? (
        //     <div>Welcome Deven</div>
        // ) : (
        //     <div>Welcome Guest</div>
        // )

        // let message 
        // if(this.state.isLogedIn){
        //     message = <div>Welcome Deven</div>
        // }
        // else{
        //     message = <div>Welcome Guest</div>
        // }
        // return <div>{message}</div>


        //if/else
        // if(this.state.isLogedIn){
        //     return(
        //         <div>
        //             Welcome Deven
        //         </div>
        //     )
        // }
        // else{
        //     return(
        //         <div>Welcome Guest</div>
        //     )
        // }

        // return (
        //   <div>Welcome Deven</div>
        // )
    }
}

export default UserGreeting