import React from "react";
import Typist from 'react-text-typist';
import "./HomeLeft.css";

const HomeLeft = () => {
    return (
        <div className="home-left">
            <div className="home-left-contents">
                <hr />
                <span>Hello, I'm</span>
                <h1> Hein Min Htun </h1>
                <h2><Typist sentences={["A Junior Web Developer."]} loop={false} className="what-am-i" /></h2>
                <div className="download-cv">
                    <a className="cv button" href="https://drive.google.com/file/d/15l1xpArVCo7nv8o91VBJhBqWgp2TLwCQ/view?usp=sharing">
                        Download CV
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HomeLeft;