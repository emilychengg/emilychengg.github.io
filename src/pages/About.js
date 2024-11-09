import React, { Component } from "react";
import aboutphoto from '/Users/emilycheng/my-app/src/logo/EmilyGraduation.JPG';
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
                    My name is Emily, and I graduated from MIT with a Bachelor of Science in Mathematics (18) and Artificial Intelligence and Decision Making (6-4) and a humanities concentration in Leadership & Negotiation. Currently, I am pursuing a Masters of Engineering in AI at MIT.
                    <br /><br />
                    I call Bay Area, California and Cambridge, Massachusetts home, and my interests span product management to consulting and include mathematical modeling, technology policy, and software engineering.    
                    <br /><br />
                    Beyond the classroom, I was a member of the <a href="https://mitathletics.com/sports/womens-volleyball">MIT Women's Varsity Volleyball</a> team, the <a href="https://linktr.ee/ckmit">Baker Foundation</a>, <a href="https://www.theta.mit.edu/">Κappa Alpha Theta</a>, and <a href="https://linktr.ee/ckmit">Camp Kesem</a>.  
                    <br /><br />
                    Last updated November 2024.
                    </p>
                    <br></br>
                </div>
                <img id="about-photo" src={aboutphoto}/>
                <br /><br />
            </div>
        )
    }
}

export default About; 