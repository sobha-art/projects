import React, { Component } from 'react';

class Purecomp extends Component {
   
    render(){
        console.log("Pure component")
        return(
            <div>
             i'm pure Component {this.props.name}
            </div>
        );
    }

}
export default Purecomp;
