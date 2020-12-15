import React from 'react';

function functionprops(props){
    return (
    <div><h3>This is funcComponent</h3>,
        <h3>Hello {props.name} from {props.place}</h3>
        </div>
    );
}
export default functionprops;