import './App.css';
import NavBar from "./modules/NavBar.js"
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Experience from './pages/Experience';
import Gallery from "./pages/GalleryHome.js";
import Boston from "./pages/gallery/boston.js";
import Korea from "./pages/gallery/korea.js";
import China from './pages/gallery/china.js';


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
            <Route element={<Experience/>} path="/experience" /> 
            <Route element={<Gallery/>} path="/gallery" />
            <Route element={<Boston/>} path="/boston" />
            <Route element={<Korea/>} path="/korea" />
            <Route element={<China/>} path="/china" />
            {/* <Route element={<MIT/>} path="/mit" /> */}
            {/* <Route element={<Portraits/>} path="/portraits" /> */}
            {/* <Route element={<Emily/>} path="/emily" /> */}
          </Routes>
        </Router>
      </div>
    )
  }
}
export default App;