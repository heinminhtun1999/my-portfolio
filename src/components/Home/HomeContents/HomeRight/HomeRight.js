import React from "react";
import "./HomeRight.css";
import hein from "./heinminhtun.jpg"

const HomeRight = () => {
    return (
        <div className="home-right">
            <img src={hein} alt="profilephoto" className="profile-picture"/>
        </div>
    )
}

export default HomeRight;