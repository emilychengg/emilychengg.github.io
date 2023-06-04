import React, { Component } from "react";
import aboutphoto from '../aboutphoto.JPG';
import { Accordion, Card } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import Button from 'react-bootstrap/Button';
import "./About.css";

class About extends Component {
    componentDidMount() {
        document.title = "Emily Cheng > About"
    }

    render() {
        return(
            <div id="aboutme">
                <div className="about-content">
                    <h1 id="about">About Me</h1>
                    <p className="about-text">
                    My name is Emily, and I’m a rising senior at MIT studying Mathematics (18) and Artificial Intelligence and Decision Making (6-4).
                    <br /><br />
                    I call Bay Area, California and Cambridge, Massachusetts home, and my interests span product design to product management to mathematical modeling and urban planning.    
                    <br /><br />
                    Beyond the classroom, I'm a member of the <a href="https://mitathletics.com/sports/womens-volleyball">MIT Women's Varsity Volleyball</a> team, the <a href="https://linktr.ee/ckmit">Baker Foundation</a>, <a href="https://www.theta.mit.edu/">Κappa Alpha Theta</a>, and <a href="https://linktr.ee/ckmit">Camp Kesem</a>.  
                    <br /><br />
                    Last updated June 2023.
                    </p>
                    <br></br>
                </div>
                <img id="about-photo" src={aboutphoto}/>
        </div>
        
        )
    }
}

export default About; 