import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import AccordionHeader from "react-bootstrap/esm/AccordionHeader";
import "./About.css";

class About extends Component {
    render() {
        return(
            <Accordion defaultActiveKey={['0']} alwaysOpen>
                <Accordion.Item eventKey="0"> 
                    <Accordion.Header >In a nutshell...</Accordion.Header>
                    <Accordion.Body>
                        I am a 19 year old student-athlete at MIT from the Bay Area, California. You can find me playing volleyball (indoor, beach, spikeball, and probably any other variation), dabbling in low stakes poker with friends, sipping on an Iced Rose from Philz, or sampling a new restaurant.                        
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header class="header">Volleyball</Accordion.Header>
                    <Accordion.Body>
                        I play setter for the MIT Varsity Women's Volleyball Team! #RollTech
                        <ul>
                            <li>
                                <a href = "https://mitathletics.com/sports/womens-volleyball"> Stay up-to-date on my team and I. </a> </li>
                            <li>
                                <a href="https://mitathletics.com/sports/womens-volleyball/schedule?path=wvball">Find out where we compete next.</a></li>
                            <li>
                                <a href="https://www.hudl.com/profile/16268440/Emily-Cheng">Check out my highlights!</a>
                            </li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Travels</Accordion.Header>
                    <Accordion.Body>
                        Maps!
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>Luna</Accordion.Header>
                    <Accordion.Body>hihihi</Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4">
                    <Accordion.Header>Favorites</Accordion.Header>
                    <Accordion.Body>hihihi</Accordion.Body>
                </Accordion.Item>
            </Accordion>
        )
    }
}

export default About; 