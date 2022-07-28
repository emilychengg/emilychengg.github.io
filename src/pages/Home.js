import React, { Component } from "react";
import logo from '../emilychenglogo.png';
import "./Home.css";
// import aboutphoto from '../about-photo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faGithubAlt, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faWordpressSimple } from '@fortawesome/free-brands-svg-icons';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSpotify} from "@fortawesome/free-brands-svg-icons";
import { faVolleyball} from '@fortawesome/free-solid-svg-icons';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="intro-box">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="vl">
                        <h1 className="header-text">Hi! My name is Emily Cheng, and I'm a rising junior at MIT studying Mathematics and Computer Science. Some of my hobbies include volleyball, cooking and eating, and traveling. <br></br> <br></br> Welcome to the soft launch of my website! </h1>
                        <div className="links">
                            <a href="https://www.instagram.com/emilyycheng/"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
                            <a href="https://www.linkedin.com/in/emilycheng6/"><FontAwesomeIcon size="3x" icon={faLinkedinIn}/></a>
                            <a href="https://mitathletics.com/sports/womens-volleyball/roster/emily-cheng/9292"><FontAwesomeIcon size="3x" icon={faVolleyball}/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;