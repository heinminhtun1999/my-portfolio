import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "./Card/Card";
import testbook from "./Card/images/testbook.png";
import discord from "./Card/images/discord.png";
import weatherapp from "./Card/images/weatherapp.png";
import Particles from 'react-particles-js';
import params from "../../particalejs_configs";
import Fade from 'react-reveal/Fade';
import "./Projects.css";

const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    smallDesktop: {
      breakpoint: { max: 2000, min: 1024 },
      items: 4
    },
    smallerDesktop: {
      breakpoint: { max: 1650, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1
    }
};

const Projects = () => {
    return (
        <div className="projects">
            <Particles params={params} className="particlebg" />
            <Fade>
                <div className="projects-content">
                    <div className="projects-header">
                        <h1>PROJECTS</h1>
                    </div>
                    <Carousel className="carousel"
                        responsive={responsive}
                        ssr={true}
                        keyBoardControl={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        infinite={true}
                        containerClass="carousel-container"
                        >
                        <Card link="https://testbook-h3in.herokuapp.com/" src={testbook} title="Testbook" desc="A Small Social Media like app that you can upload post with text and image." />
                        <Card link="https://github.com/heinminhtun1999/discord-music-bot" src={discord} title="Discord Bot" desc="Made for me and my friends to listen songs on discord." />
                        <Card link="https://heinminhtun1999.github.io/weather-app/" src={weatherapp} title="Weather-App" desc="A weather app that shows current weather of your location or weather of the selected location." />
                    </Carousel>
                </div>
            </Fade>
        </div>
    )
}

export default Projects;