import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
// import Budget from './budget/Budget';
import Budget from './budget/Budget';
import InputBudget from './budget/inputBudget';
class App extends Component{
  render(){
    return(
      <div className="App">
        <Navbar/>
        <div className="container my-5">
          <Budget/>
        </div>
      </div>
    )
  }
}

export default App;
