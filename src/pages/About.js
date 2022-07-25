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
                    My name is Emily, and I’m an incoming junior at MIT studying Mathematics and Computer Science.
                    <br /><br />
                    I call Bay Area, California and Cambridge, Massachusetts home, and my interests span product design to product management to mathematical modeling and psychology.    
                    <br /><br />
                    Beyond the classroom, I'm a member of the <a href="https://mitathletics.com/sports/womens-volleyball">MIT Women's Varsity Volleyball</a> team, the <a href="https://linktr.ee/ckmit">Baker Foundation</a>, <a href="https://www.theta.mit.edu/">Κappa Alpha Theta</a>, and <a href="https://linktr.ee/ckmit">Camp Kesem</a>.  
                    <br /><br />
                    Talk to me about your favorite restaurants, product management, or the latest trends. <a href="mailto:emilych@mit.edu">Please reach out to me here</a>.
                    <br></br> <br></br>
                    Last updated July 2022.
                    </p>
                    <br></br>
                </div>
                <img id="about-photo" src={aboutphoto}/>
        </div>
        
        )
    }
}

export default About; 