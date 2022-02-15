import React from "react";
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import "./AboutLeft.css";

const AboutLeft = (props) => {

    return (
        <div className="about-left" >
            <div className="about-left-contents" >
                    <hr />
                    <span>About Me</span>
                <Fade>
                    <h2>I'm a Junior Web Developer</h2>
                </Fade>
                <Fade>
                    <p>
                        Proficient in creating user interface, writing and testing codes, troubleshooting simple/complex issues,
                        and implementing new features based on user feedback.
                    </p>
                </Fade>
                <Slide left cascade>
                    <div className="social-media">
                        <a href="https://github.com/heinminhtun1999" target="_blank" rel="noreferrer">
                            <GitHubIcon style={{ color: "white", fontSize: "30px" }} /> 
                        </a>
                        <a href="https://www.linkedin.com/in/hein-min-htun-26bb1b1aa/" target="_blank" rel="noreferrer">
                            <LinkedInIcon style={{ color: "white" }} fontSize="large" /> 
                        </a>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default AboutLeft;