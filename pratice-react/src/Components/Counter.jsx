import React, {Component} from 'react';
import UpdatedComp from './HigherOrder';
export class Counter extends Component{
    constructor(props){
        super(props);
        
        this.state={
            count:0
        };
    }
    IncrementedClick=()=>{
        this.setState=({count: this.state.count + 1});
    };
    render(){
        const { count } = this.state;
        return(
            <div>
                <button onMouseEnter={this.IncrementedClick}>
                    {this.props.name} Incremented {count} 
                times</button>
            </div>
        );
    }
}
export default UpdatedComp(Counter);