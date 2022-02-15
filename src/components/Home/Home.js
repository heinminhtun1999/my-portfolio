import React from "react";
import HomeLeft from "./HomeContents/HomeLeft/HomeLeft";
import HomeRight from "./HomeContents/HomeRight/HomeRight";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home-contents">
                <HomeLeft />
                <HomeRight />
            </div>
        </div>
    )
}

export default Home;