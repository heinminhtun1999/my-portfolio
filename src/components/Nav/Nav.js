import React from "react";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Nav.css";

const Nav = (props) => {

    const { expandMenu, expandClicked, navHandleOver, navMouseOver, navHandleOut, goToDiv } = props;

    const config = {
        borderTopLeftRadius: navMouseOver ? "10px" : expandClicked ? "10px" : 0,
        borderBottomLeftRadius: navMouseOver ? "10px" : expandClicked ? "10px" : 0,
        borderLeft: navMouseOver ? "1px solid #D9D9D9" : expandClicked ? "1px solid #D9D9D9" : 0,
        transform: expandClicked ? "translateY(0)" : "translateY(100px)",
        marginLeft: navMouseOver ? "10px" :  expandClicked ? "10px" : 0,
        transition: "0.5s all"
    }

    return (
        <div className="nav" style={{transform: expandClicked ? "unset" : "translateX(-165px)"}}>
            <div className="nav-lists">
                <p onClick={() => goToDiv("home")}>Home</p>
                <p onClick={() => goToDiv("about")}>About</p>
                <p onClick={() => goToDiv("projects")}>Projects</p>
                <p onClick={() => goToDiv("contact")}>Contact</p>
            </div>
            <div className="expander" onClick={expandMenu} onMouseOver={navHandleOver} style={config} onMouseOut={navHandleOut}>
                <ArrowRightIcon className="arrow" style={{transform: expandClicked ? "rotateY(180deg)" :  "unset"}}/>
            </div>
        </div>
    )
}

export default Nav;