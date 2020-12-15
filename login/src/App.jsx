import React from 'react';
import './App.css';
import Login from './Components/Form';
import Click from './Components/Click';
import {BrowserRouter as Route,Link, Router} from 'react-router-dom';
import Contact from './Contact';
import Home from './Components/Home';
import About from './About';

  class App extends React.Component {
    render(){
   return (
     
     <div>
     <Router>
     <Link to="">Home</Link>
    {/*  <Home />
      <About />
    <Contact /> */}
    </Router>
     </div>
   );
   }
  }
  
  export default App;