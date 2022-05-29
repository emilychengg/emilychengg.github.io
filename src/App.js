// import logo from './logo.svg';
// import logo from '../logo192.png';
import './App.css';
import NavBar from "./modules/NavBar.js"
import React, { Component } from "react";
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link
} from "react-router-dom";

import About from "./pages/About"
import Timeline from "./pages/Timeline";
import Experience from './pages/Experience';
import Restaurants from "./pages/Restaurants";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return(
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route element={<About/>} path="/about" />
            <Route element={<Timeline/>} path="/timeline" />
            <Route element={<Experience/>} path="/experience" /> 
            <Route element={<Restaurants/>} path="/restaurants" />
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App;

/* function App() {
  return (
    <NavBar/>
  )
}

export default App; */


/* export default function App(){
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route component={About} exact path="/about" />
          <Route component={Timeline} path="/timeline" />
          <Route component={Experience} path="/experience" /> 
          <Route component={Restaurants} path="/restaurants" />
        </Routes>
      </Router>
    </div>
  )
} */

/* class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return(
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route component={About} exact path="/about" />
            <Route component={Timeline} path="/timeline" />
            <Route component={Experience} path="/experience" /> 
            <Route component={Restaurants} path="/restaurants" />
          </Routes>
        </Router>
      </div>
    )
  }
}

export default App;
 */