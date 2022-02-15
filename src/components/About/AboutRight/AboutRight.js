import React from "react";
import Skill from "./Skill/Skill";
import html from "./Skill/logos/html.png";
import css from "./Skill/logos/css.png";
import js from "./Skill/logos/js.png";
import react from "./Skill/logos/react.png";
import nodejs from "./Skill/logos/nodejs.png";
import mongo from "./Skill/logos/mongo.png";
import "./AboutRight.css";

const AboutRight = (props) => {

    const { skillEnteredViewPort, onSkillEnterViewPort, onSkillExitViewPort } = props;

    return (
        <div className="about-right">
            <div className="about-right-contents">
                <hr />
                <p>My Skills</p>
                    <div className="skills">
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="html skill" 
                        logoName="HTML" 
                        src={html} 
                        skill={skillEnteredViewPort ? "60" : 0} 
                        />
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="css skill" 
                        logoName="CSS" 
                        src={css} 
                        skill={skillEnteredViewPort ? "50" : 0} 
                        />
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="js skill" 
                        logoName="JavaScript" 
                        src={js} 
                        skill={skillEnteredViewPort ? "50" : 0} 
                        />
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="react skill" 
                        logoName="React" 
                        src={react} 
                        skill={skillEnteredViewPort ? "60" : 0} 
                        />
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="nodejs skill" 
                        logoName="Node" 
                        src={nodejs} 
                        skill={skillEnteredViewPort ? "45" : 0} 
                        />
                        <Skill 
                        onSkillEnterViewPort={onSkillEnterViewPort} 
                        onSkillExitViewPort={onSkillExitViewPort} 
                        class_name="mongo skill" 
                        logoName="MongoDB" 
                        src={mongo} 
                        skill={skillEnteredViewPort ? "45" : 0} 
                        />
                    </div>

            </div>
        </div>
    )
}

export default AboutRight;