import React, { Component } from 'react';

class RegComp extends Component {
   
    render(){
        console.log("reg component")
        return(
            <div>
             i'm Regular Component {this.props.name}
            </div>
        );
    }

}
export default RegComp;