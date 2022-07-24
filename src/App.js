// import logo from './logo.svg';
//import logo from '../emilychenglogononame.png';
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

import Home from "./pages/Home";
import About from "./pages/About";
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
          <NavBar/>
          <Routes>
            <Route element={<Home/>} exact path = "/" />
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