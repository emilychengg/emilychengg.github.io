import React, { Component } from "react";
import logo from '/Users/emilycheng/my-app/src/logo/emilychenglogo.png';
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faVolleyball, faBowlFood} from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin} from '@fortawesome/free-brands-svg-icons';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="intro-box">
                    <img className="logo" src={logo} alt="logo" />
                    <div className="vl">
                        <h1 className="header-text">Hi! My name is Emily Cheng, and I just graduated from MIT with a Bachelors in Mathematics and in Artificial Intelligence. I'm currently doing a Masters in Engineering in AI back at MIT. Some of my hobbies include volleyball, cooking and eating, and traveling. <br></br> <br></br> Welcome to my website! </h1>
                        <div className="links">
                            <a href="https://www.linkedin.com/in/emilycheng6/"><FontAwesomeIcon size="3x" icon={faLinkedin}/></a>
                            <a href="https://www.instagram.com/emilyycheng/"><FontAwesomeIcon icon={faInstagram} size="3x"/></a>
                            <a href="https://mitathletics.com/sports/womens-volleyball/roster/emily-cheng/9292"><FontAwesomeIcon size="3x" icon={faVolleyball}/></a>
                            <a href="https://app.beliapp.com/lists/emilycheng"><FontAwesomeIcon size="3x" icon={faBowlFood}/></a>
                            <a href="https://vsco.co/emilyychengg/gallery"><FontAwesomeIcon icon={faCamera} size="3x"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;