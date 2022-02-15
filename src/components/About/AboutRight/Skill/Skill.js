import React from "react";
import Countup from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';
import "./Skill.css";

const Skill = (props) => {

    const { class_name, src, logoName, skill, onSkillEnterViewPort, onSkillExitViewPort } = props

    return (
        <ScrollTrigger onEnter={onSkillEnterViewPort} onExit={onSkillExitViewPort} className="scroll-trigger">
            <div className={class_name}>
                <img src={src} alt="logo" className={logoName} />
                <div className="skill-div">
                    <div className="skill-num">
                        <span>{logoName}</span>
                        <span><Countup end={skill} duration={1} />%</span>
                    </div>
                    <div className="skill-meter" style={{ width: skill + "%" }}></div>
                </div>
            </div>
        </ScrollTrigger>
    )
}

export default Skill