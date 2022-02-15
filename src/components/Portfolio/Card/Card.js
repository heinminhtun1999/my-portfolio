import React from "react";
import "./Card.css";

const Card = (props) => {

    const { src, title, desc, link } = props;

    return (
        <div className="card">
            <img src={src} alt="" className="project-images"></img>
            <div className="card-text">
                <h2>{title}</h2>
                <p>{desc}</p>
                <a href={link} target="_blank" rel="noreferrer">{title}</a>
            </div>
        </div>
    )
}

export default Card;
