import React from "react";
import Particles from 'react-particles-js';
import AboutLeft from "./AboutLeft/AboutLeft";
import AboutRight from "./AboutRight/AboutRight";
import params from "../../particalejs_configs";
import "./About.css";

const About = (props) => {

    const { skillEnteredViewPort, onSkillEnterViewPort, onSkillExitViewPort } = props

    return (
            <div className="about">
                <Particles params={params} className="particlebg" />
                <AboutLeft />
                <AboutRight 
                onSkillEnterViewPort={onSkillEnterViewPort}
                onSkillExitViewPort={onSkillExitViewPort} 
                skillEnteredViewPort={skillEnteredViewPort} 
                />
            </div>
    )
}

export default About;