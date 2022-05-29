import React, { Component } from "react";
import "./About.css";
import logo from '../logo-cropped.png';
import aboutphoto from '../about-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpotify} from "@fortawesome/free-brands-svg-icons";

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="intro-box">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="vl">
                        <h1 className="header-text">Hi! My name is Emily Cheng, and I'm a junior at MIT studying mathematics and computer science. Some of my interests include volleyball, product management, cooking and eating, and hiking. Feel free to look around.</h1>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/emilycheng6/"><FontAwesomeIcon size="3x" icon={faLinkedinIn}/></a>
                            <a href="https://mitathletics.com/sports/womens-volleyball/roster/emily-cheng/9292"><FontAwesomeIcon size="3x" icon={faWordpressSimple}/></a>
                            <a href="https://www.instagram.com/emilyycheng/"><FontAwesomeIcon icon={faTwitter} size="3x"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;