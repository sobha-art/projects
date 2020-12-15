import logo from './logo.svg';
import './App.css';
import FuncComponent from './Components/FuncComp';
import {ClassComponent, ClassComponent1} from './Components/ClassComp';
import Click1 from './Components/Click1.jsx';
import { Counter } from './Components/Counter.jsx';
import ParentComp from './Components/ParentComp';
import ClassProps from './Components/ClassProps';
import  FuncProps from './Components/FuncProps';

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <ClassProps name="Sobha" ><p>child component</p></ClassProps>
      <ClassProps name="Ravi"><button>Clickhere
      </button></ClassProps>
      <ClassProps name="Priya"/>
      <FuncProps name="sobha" place="leanerA" />
      <FuncComponent />
      <ClassComponent />
      <ClassComponent1 />
      <Click1 />
      <Counter />
      <ParentComp />
    </div>
  );
}

export default App;
