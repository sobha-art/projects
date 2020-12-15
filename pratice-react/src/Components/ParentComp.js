
import React, { Component } from 'react';
import PureComp from './PureComp';

class ParentComp extends Component {
constructor(props){
    super(props);
    this.state={
      name:"sobhalearn"
    }
}
componentDidMount=()=>{
    setInterval(()=>
    {this.setState({
        name:"sobhalearn"
    })},3000);
}
    render(){
        console.log("parent component");
        return(
            <div>
             i'm Parent Component
             
             <PureComp name={this.state.name} />
            </div>
        );
    }

}
export default ParentComp;