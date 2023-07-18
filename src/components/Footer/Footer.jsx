import StarImg from "../../images/star.svg";
import React from 'react';
import "./Footer.css";

const Footer = () => (
    <div className="center">
                    <img src={StarImg} alt="star" width="16" height="16" />
            <p>Created By <a href="https://github.com/VanshikaDutt" target="_blank" rel="noreferrer" id="link"><span id="author">Vanshika</span></a></p>
    </div>

);


export default Footer