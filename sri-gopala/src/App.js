
import React, {Component} from 'react';
import './App.css';

class App extends Component{
constructor(){
super();
this.state={products:[] };
};
componentDidMount(){
  fetch('https://fir-project-5445f.web.app/prodcuts.json')
  .then(response=>response.json())
  .then(items=>this.setState({products:items}));
}
render(){
return(
<div className="App">
{/* {this.state.products.map(product=>(<div><h1>{product.name}</h1>
                                        <h2>{product.Price}</h2></div>))} */}

{this.state.products.map(product=>
(<div key={product.id}><h1>{product.name}</h1>
     <h2>{product.Price}</h2></div>))}
</div>
);
}
}
export default App;